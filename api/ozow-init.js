// Lockshot — Ozow payment initiation
// Generates a signed form payload for Ozow's hosted payment page.
const crypto = require('crypto');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://lockshot.co.za');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  const SITE_CODE  = process.env.OZOW_SITE_CODE   || 'TSTSTE0001';
  const PRIVATE_KEY = process.env.OZOW_PRIVATE_KEY || '215114531AFF7134A94C88CEEA48E';
  const IS_TEST    = process.env.OZOW_LIVE === 'true' ? 'false' : 'true';
  const SITE_URL   = 'https://lockshot.co.za';

  const body = req.body || {};
  const { amount, userId } = body;

  if (!amount || !userId) return res.status(400).json({ error: 'Missing amount or userId' });

  const validAmounts = [20, 50, 100, 200];
  if (!validAmounts.includes(Number(amount))) return res.status(400).json({ error: 'Invalid amount' });

  const txRef    = `LS${Date.now()}`;
  const amountStr = Number(amount).toFixed(2);

  const f = {
    SiteCode:             SITE_CODE,
    CountryCode:          'ZA',
    CurrencyCode:         'ZAR',
    Amount:               amountStr,
    TransactionReference: txRef,
    BankReference:        'Lockshot Wallet',
    Optional1:            userId,
    Optional2:            '',
    Optional3:            '',
    Optional4:            '',
    Optional5:            '',
    Customer:             '',
    CancelUrl:            `${SITE_URL}/wallet.html?topup=cancelled`,
    ErrorUrl:             `${SITE_URL}/wallet.html?topup=error`,
    SuccessUrl:           `${SITE_URL}/wallet.html?topup=success`,
    NotifyUrl:            `${SITE_URL}/api/ozow-notify`,
    IsTest:               IS_TEST,
  };

  const hashStr = [
    f.SiteCode, f.CountryCode, f.CurrencyCode, f.Amount,
    f.TransactionReference, f.BankReference,
    f.Optional1, f.Optional2, f.Optional3,
    f.Optional4, f.Optional5, f.Customer,
    f.CancelUrl, f.ErrorUrl, f.SuccessUrl, f.NotifyUrl,
    f.IsTest, PRIVATE_KEY,
  ].join('').toLowerCase();

  f.HashCheck = crypto.createHash('sha512').update(hashStr).digest('hex');

  return res.status(200).json({ payUrl: 'https://pay.ozow.com/', fields: f });
};
