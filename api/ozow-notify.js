// Lockshot — Ozow payment notify (webhook)
// Ozow POSTs here after a payment attempt. Verifies the hash then credits the wallet.
const crypto = require('crypto');

async function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => { data += chunk; });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const SITE_CODE   = process.env.OZOW_SITE_CODE   || 'TSTSTE0001';
  const PRIVATE_KEY = process.env.OZOW_PRIVATE_KEY  || '215114531AFF7134A94C88CEEA48E';
  const SUPABASE_URL = process.env.SUPABASE_URL     || 'https://asyytiinwznouwiqjeol.supabase.co';
  const SERVICE_KEY  = process.env.SUPABASE_SERVICE_KEY;

  // Parse form-encoded body
  let body = req.body;
  if (!body || (typeof body === 'object' && !Object.keys(body).length)) {
    const raw = await readBody(req);
    body = Object.fromEntries(new URLSearchParams(raw).entries());
  }

  const {
    SiteCode, TransactionId, TransactionReference, Amount,
    Status, Optional1: userId, Optional2 = '', Optional3 = '',
    CurrencyCode, IsTest, Hash,
  } = body || {};

  // Verify Ozow hash
  const hashStr = [
    SiteCode || '', TransactionId || '', TransactionReference || '',
    Amount || '', Status || '',
    userId || '', Optional2, Optional3,
    CurrencyCode || '', IsTest || '', PRIVATE_KEY,
  ].join('').toLowerCase();

  const expected = crypto.createHash('sha512').update(hashStr).digest('hex');
  if (!Hash || expected !== Hash.toLowerCase()) {
    console.error('Ozow hash mismatch');
    return res.status(400).json({ error: 'Invalid hash' });
  }

  // Only credit on Complete — ignore Cancelled / Error silently
  if (Status !== 'Complete') return res.status(200).json({ received: true, status: Status });

  if (!userId || !SERVICE_KEY) return res.status(500).json({ error: 'Config error' });

  const amount = parseFloat(Amount);
  if (isNaN(amount) || amount <= 0) return res.status(400).json({ error: 'Invalid amount' });

  const sb = {
    apikey: SERVICE_KEY,
    Authorization: `Bearer ${SERVICE_KEY}`,
    'Content-Type': 'application/json',
  };

  try {
    // Idempotency — skip if already processed
    const txDesc = `Ozow top-up · ${TransactionReference}`;
    const dupRes  = await fetch(
      `${SUPABASE_URL}/rest/v1/wallet_transactions?description=eq.${encodeURIComponent(txDesc)}&select=id&limit=1`,
      { headers: sb }
    );
    const existing = await dupRes.json();
    if (Array.isArray(existing) && existing.length > 0) {
      return res.status(200).json({ received: true, duplicate: true });
    }

    // Get current balance (or 0 if no wallet row yet)
    const walletRes = await fetch(
      `${SUPABASE_URL}/rest/v1/wallets?user_id=eq.${userId}&select=balance`,
      { headers: sb }
    );
    const wallets    = await walletRes.json();
    const current    = parseFloat(wallets?.[0]?.balance ?? 0);
    const newBalance = parseFloat((current + amount).toFixed(2));

    // Upsert wallet row
    await fetch(`${SUPABASE_URL}/rest/v1/wallets`, {
      method: 'POST',
      headers: { ...sb, Prefer: 'resolution=merge-duplicates' },
      body: JSON.stringify({ user_id: userId, balance: newBalance, updated_at: new Date().toISOString() }),
    });

    // Log transaction
    await fetch(`${SUPABASE_URL}/rest/v1/wallet_transactions`, {
      method: 'POST',
      headers: sb,
      body: JSON.stringify({ user_id: userId, type: 'topup', amount, description: txDesc }),
    });

    return res.status(200).json({ received: true });
  } catch (err) {
    console.error('Ozow notify error:', err);
    return res.status(500).json({ error: err.message });
  }
};
