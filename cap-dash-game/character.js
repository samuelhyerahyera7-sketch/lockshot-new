'use strict';

/**
 * PlatformerCharacter — plug-and-play Mario-style runner.
 *
 * Coordinates: x = horizontal centre, y = bottom of feet (canvas Y-down).
 * Platforms must be plain objects: { x, y, w, h }  (top-left origin).
 *
 * Minimal usage:
 *   const char = new PlatformerCharacter(100, 400).bindKeys();
 *   function loop(dt) { char.update(dt, platforms); char.draw(ctx); }
 *
 * To control manually instead of bindKeys(), set char._keys:
 *   char._keys.left / .right / .jump  (booleans)
 *   char._keys._jp = true             (one-frame jump-press signal)
 */
class PlatformerCharacter {
  constructor(x, y, opts = {}) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.onGround = false;
    this.facingRight = true;

    // ── Physics ──────────────────────────────────────────────────────────
    this.maxSpeed      = opts.maxSpeed      ?? 200;   // px/s
    this.accel         = opts.accel         ?? 950;   // px/s²
    this.decel         = opts.decel         ?? 800;   // px/s² (friction)
    this.gravity       = opts.gravity       ?? 1100;  // px/s²
    this.maxFall       = opts.maxFall       ?? 900;   // terminal velocity
    this.jumpForce     = opts.jumpForce     ?? -560;  // initial jump vy
    this.jumpHoldTime  = opts.jumpHoldTime  ?? 0.18;  // seconds of boosted ascent
    this.jumpHoldForce = opts.jumpHoldForce ?? 240;   // extra upward force while holding

    // ── Hitbox (feet = this.y, centred on this.x) ────────────────────────
    this.hw = 11;   // half-width
    this.hh = 52;   // full height

    // ── State ────────────────────────────────────────────────────────────
    this.state = 'idle';   // 'idle' | 'run' | 'jump' | 'fall'

    // ── Animation ────────────────────────────────────────────────────────
    this._animDist  = 0;
    this._animFrame = 0;

    // ── Feel-good mechanics ───────────────────────────────────────────────
    this._coyoteTimer  = 0;     // grace period after walking off a ledge
    this._jumpBufTimer = 0;     // buffer: jump pressed just before landing
    this._jumpHolding  = false;
    this._jumpHoldLeft = 0;

    // ── Squash & stretch ─────────────────────────────────────────────────
    this._sx = 1;
    this._sy = 1;

    // ── Input ─────────────────────────────────────────────────────────────
    // Populated by bindKeys() or set externally.
    this._keys = { left: false, right: false, jump: false, _jp: false };
  }

  // ═══════════════════════════════════════════════════════════════════════
  //  Public API
  // ═══════════════════════════════════════════════════════════════════════

  /**
   * Advance one frame.
   * @param {number} dt        Seconds since last frame.
   * @param {Array}  platforms [{x,y,w,h}, …] solid rectangles.
   */
  update(dt, platforms = []) {
    const k = this._keys;

    // ── Horizontal input ─────────────────────────────────────────────────
    if (k.left && !k.right) {
      this.vx = Math.max(this.vx - this.accel * dt, -this.maxSpeed);
      this.facingRight = false;
    } else if (k.right && !k.left) {
      this.vx = Math.min(this.vx + this.accel * dt,  this.maxSpeed);
      this.facingRight = true;
    } else {
      const d = this.decel * dt;
      this.vx = Math.abs(this.vx) <= d ? 0 : this.vx - Math.sign(this.vx) * d;
    }

    // ── Jump buffer ───────────────────────────────────────────────────────
    if (k._jp) { this._jumpBufTimer = 0.12; k._jp = false; }
    if (this._jumpBufTimer > 0) this._jumpBufTimer -= dt;

    // ── Trigger jump ──────────────────────────────────────────────────────
    if (this._jumpBufTimer > 0 && (this.onGround || this._coyoteTimer > 0)) {
      this.vy            = this.jumpForce;
      this._jumpBufTimer = 0;
      this._coyoteTimer  = 0;
      this._jumpHolding  = true;
      this._jumpHoldLeft = this.jumpHoldTime;
      // Launch stretch
      this._sx = 0.80;
      this._sy = 1.28;
    }

    // ── Variable jump height ──────────────────────────────────────────────
    if (this._jumpHolding && k.jump && this._jumpHoldLeft > 0) {
      this.vy           -= this.jumpHoldForce * dt;
      this._jumpHoldLeft -= dt;
    } else if (!k.jump) {
      this._jumpHolding = false;
    }

    // ── Gravity ───────────────────────────────────────────────────────────
    this.vy = Math.min(this.vy + this.gravity * dt, this.maxFall);

    // ── Move X → resolve horizontal collisions ────────────────────────────
    this.x += this.vx * dt;
    for (const p of platforms) this._resolveX(p);

    // ── Move Y → resolve vertical collisions ──────────────────────────────
    const wasOnGround = this.onGround;
    this.onGround = false;
    this.y += this.vy * dt;
    for (const p of platforms) this._resolveY(p);

    // ── Landing squash ────────────────────────────────────────────────────
    if (this.onGround && !wasOnGround) {
      const impact = Math.min(Math.abs(this.vy) / this.maxFall, 1);
      if (impact > 0.1) {
        this._sx = 1 + impact * 0.40;
        this._sy = 1 - impact * 0.32;
      }
      this._jumpHolding = false;
    }

    // ── Squash recovery ───────────────────────────────────────────────────
    const rec = Math.min(dt * 14, 1);
    this._sx += (1 - this._sx) * rec;
    this._sy += (1 - this._sy) * rec;

    // ── Coyote time ───────────────────────────────────────────────────────
    if (wasOnGround && !this.onGround && this.vy >= 0) this._coyoteTimer = 0.10;
    if (this._coyoteTimer > 0) this._coyoteTimer -= dt;

    // ── State machine ─────────────────────────────────────────────────────
    if (!this.onGround) {
      this.state = this.vy < 0 ? 'jump' : 'fall';
    } else if (Math.abs(this.vx) > 5) {
      this.state = 'run';
    } else {
      this.state = 'idle';
    }

    // ── Run animation ─────────────────────────────────────────────────────
    if (this.state === 'run') {
      this._animDist += Math.abs(this.vx) * dt;
      this._animFrame  = Math.floor(this._animDist / 18) % 4;
    } else {
      this._animDist  = 0;
      this._animFrame = 0;
    }
  }

  /**
   * Render the character at its current position.
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    ctx.save();
    ctx.translate(Math.round(this.x), Math.round(this.y));
    // Flip for direction, apply squash/stretch (scale origin = feet)
    ctx.scale((this.facingRight ? 1 : -1) * this._sx, this._sy);
    this._paint(ctx);
    ctx.restore();
  }

  /**
   * Attach keyboard listeners.
   * Arrow keys / A D = move.  Space / W / ↑ = jump.
   * Returns `this` for chaining.
   */
  bindKeys(target = window) {
    this._keys = { left: false, right: false, jump: false, _jp: false };
    const k     = this._keys;
    const JUMP  = new Set(['Space', 'ArrowUp', 'KeyW']);
    const LEFT  = new Set(['ArrowLeft', 'KeyA']);
    const RIGHT = new Set(['ArrowRight', 'KeyD']);

    target.addEventListener('keydown', e => {
      if (LEFT.has(e.code))              k.left  = true;
      if (RIGHT.has(e.code))             k.right = true;
      if (JUMP.has(e.code) && !e.repeat) { k.jump = true; k._jp = true; }
      if (LEFT.has(e.code) || RIGHT.has(e.code) || JUMP.has(e.code))
        e.preventDefault();
    });
    target.addEventListener('keyup', e => {
      if (LEFT.has(e.code))  k.left  = false;
      if (RIGHT.has(e.code)) k.right = false;
      if (JUMP.has(e.code))  k.jump  = false;
    });
    return this;
  }

  // ═══════════════════════════════════════════════════════════════════════
  //  Collision helpers
  // ═══════════════════════════════════════════════════════════════════════

  _box() {
    return { l: this.x - this.hw, r: this.x + this.hw,
             t: this.y - this.hh, b: this.y };
  }

  _hits(b, p) {
    return b.r > p.x && b.l < p.x + p.w &&
           b.b > p.y && b.t < p.y + p.h;
  }

  _resolveX(p) {
    const b = this._box();
    if (!this._hits(b, p)) return;
    // Only push out horizontally when velocity is actually moving into this side.
    // When vx ≈ 0 (falling straight down) let _resolveY handle it instead.
    if (this.x < p.x + p.w * 0.5 && this.vx > 0) {
      this.x = p.x - this.hw;
      this.vx = 0;
    } else if (this.x >= p.x + p.w * 0.5 && this.vx < 0) {
      this.x = p.x + p.w + this.hw;
      this.vx = 0;
    }
  }

  _resolveY(p) {
    const b = this._box();
    if (!this._hits(b, p)) return;
    if (this.vy >= 0) {
      // Falling: land on top surface
      this.y        = p.y;
      this.vy       = 0;
      this.onGround = true;
    } else {
      // Rising: bump ceiling
      this.y            = p.y + p.h + this.hh;
      this.vy           = 0;
      this._jumpHolding = false;
    }
  }

  // ═══════════════════════════════════════════════════════════════════════
  //  Rendering internals
  // ═══════════════════════════════════════════════════════════════════════

  _paint(ctx) {
    const f = this._animFrame;
    const s = this.state;

    // colour palette
    const SKIN    = '#fde0b8';   // light skin
    const SKIN_S  = '#d4a070';   // shadow
    const HOODIE  = '#ff6835';
    const HOODIE2 = '#c45520';
    const SHORTS  = '#1a1a2e';
    const BAND    = '#28c940';   // green bandana
    const BAND2   = '#1a8f2b';   // bandana shadow

    // Body bob
    if (s === 'run' && (f === 1 || f === 3)) ctx.translate(0, 1);

    // Shadow
    ctx.fillStyle = 'rgba(0,0,0,0.18)';
    ctx.beginPath();
    ctx.ellipse(1, 2, 14, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // ── LEG POSITIONS ─────────────────────────────────────────────────────
    const HY = -21;
    const STRIDES = [
      [ 6,  0, -5, -3],
      [ 2,  0, -2,  0],
      [-5, -3,  6,  0],
      [-2,  0,  2,  0],
    ];
    let nX, nY, fX, fY;
    if (s === 'jump')       { nX = 5; nY = -7; fX = -4; fY = -5; }
    else if (s === 'fall')  { nX = 2; nY = -2; fX = -2; fY =  0; }
    else if (s === 'run')   { [nX, nY, fX, fY] = STRIDES[f]; }
    else                    { nX = 2; nY =  0; fX = -2; fY =  0; }

    // ── ARM POSITIONS ─────────────────────────────────────────────────────
    const nSX =  8, nSY = -41;
    const fSX = -7, fSY = -41;
    let nEX, nEY, nHX, nHY;
    let fEX, fEY, fHX, fHY;

    if (s === 'run') {
      if (f < 2) {
        // near arm back, far arm forward — tighter swing
        nEX = 10; nEY = -33; nHX =  9; nHY = -27;
        fEX = -7; fEY = -35; fHX = -9; fHY = -44;
      } else {
        nEX = 11; nEY = -35; nHX = 13; nHY = -44;
        fEX = -6; fEY = -33; fHX = -5; fHY = -27;
      }
    } else if (s === 'jump') {
      nEX = 13; nEY = -40; nHX = 16; nHY = -51;
      fEX = -11; fEY = -40; fHX = -14; fHY = -51;
    } else if (s === 'fall') {
      nEX = 14; nEY = -34; nHX = 17; nHY = -28;
      fEX = -12; fEY = -34; fHX = -15; fHY = -28;
    } else {
      nEX = 11; nEY = -33; nHX =  9; nHY = -26;
      fEX = -8;  fEY = -33; fHX = -7; fHY = -26;
    }

    // ── FAR ARM ───────────────────────────────────────────────────────────
    this._thickSeg(ctx, fSX, fSY, fEX, fEY, 7, HOODIE2);
    this._thickSeg(ctx, fEX, fEY, fHX, fHY, 5, HOODIE2);
    ctx.fillStyle = SKIN;
    ctx.beginPath();
    ctx.ellipse(fHX, fHY, 4, 4, 0, 0, Math.PI * 2);
    ctx.fill();

    // ── FAR LEG ───────────────────────────────────────────────────────────
    this._dashLeg(ctx, fX, fY, HY);

    // ── BODY ─────────────────────────────────────────────────────────────
    ctx.fillStyle = SHORTS;
    ctx.fillRect(-9, -28, 20, 8);           // shorts
    ctx.fillStyle = HOODIE;
    ctx.fillRect(-10, -43, 21, 16);         // hoodie torso
    ctx.fillStyle = HOODIE2;
    ctx.fillRect(-10, -43,  3, 16);         // left shadow strip
    ctx.fillRect(  0, -39,  6,  7);         // pocket
    ctx.fillStyle = '#ff8c5a';
    ctx.fillRect( -7, -43,  4,  2);         // collar highlight

    // ── NEAR LEG ─────────────────────────────────────────────────────────
    this._dashLeg(ctx, nX, nY, HY);

    // ── NEAR ARM ─────────────────────────────────────────────────────────
    this._thickSeg(ctx, nSX, nSY, nEX, nEY, 8, HOODIE);
    this._thickSeg(ctx, nEX, nEY, nHX, nHY, 6, HOODIE);
    ctx.fillStyle = SKIN;
    ctx.beginPath();
    ctx.ellipse(nHX, nHY, 4, 4, 0, 0, Math.PI * 2);
    ctx.fill();

    // ── NECK ─────────────────────────────────────────────────────────────
    ctx.fillStyle = SKIN;
    ctx.fillRect(0, -47, 5, 5);

    // ── HAIR MASS (drawn before head so head skin covers the face side) ───
    ctx.fillStyle = '#111';
    ctx.beginPath();
    ctx.ellipse(-2, -60, 11, 12, 0, 0, Math.PI * 2);
    ctx.fill();

    // ── HEAD (skin covers hair on face side) ──────────────────────────────
    ctx.fillStyle = SKIN;
    ctx.beginPath();
    ctx.ellipse(3, -56, 11, 11, 0, 0, Math.PI * 2);
    ctx.fill();

    // Eye — white sclera then dark iris
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.ellipse(11, -59, 4.5, 4, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#111';
    ctx.beginPath();
    ctx.ellipse(11.5, -59, 3, 3.5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(12.5, -60.5, 1.2, 0, Math.PI * 2);
    ctx.fill();

    // Eyebrow
    ctx.fillStyle = '#111';
    ctx.fillRect(7, s === 'jump' ? -66 : -64, 9, 2);

    // Nose
    ctx.fillStyle = '#e0a070';
    ctx.beginPath();
    ctx.ellipse(13, -54, 2.5, 2, 0, 0, Math.PI * 2);
    ctx.fill();

    // Mouth
    if (s === 'run' || s === 'jump') {
      ctx.fillStyle = '#1a0700';
      ctx.beginPath();
      ctx.ellipse(10, -51, 2.5, 3, 0, 0, Math.PI * 2);
      ctx.fill();
      // teeth flash
      ctx.fillStyle = '#fff';
      ctx.fillRect(8, -53, 5, 2);
    } else {
      ctx.strokeStyle = SKIN_S;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(10, -52, 3, 0.1, Math.PI - 0.1);
      ctx.stroke();
    }

    // ── GREEN BANDANA ─────────────────────────────────────────────────────
    // Main band across forehead (just above eyebrow level)
    ctx.fillStyle = BAND;
    ctx.fillRect(-9, -70, 23, 6);
    // Fold / shadow at bottom edge of band
    ctx.fillStyle = BAND2;
    ctx.fillRect(-9, -65, 23, 1);
    // Top highlight
    ctx.fillStyle = '#3de855';
    ctx.fillRect(-9, -70, 23, 1);
    // Knot flaps at the back (left side)
    ctx.fillStyle = BAND;
    ctx.beginPath();
    ctx.moveTo(-9, -70); ctx.lineTo(-17, -68); ctx.lineTo(-9, -65);
    ctx.closePath(); ctx.fill();
    ctx.beginPath();
    ctx.moveTo(-9, -69); ctx.lineTo(-18, -73); ctx.lineTo(-9, -71);
    ctx.closePath(); ctx.fill();
    ctx.fillStyle = BAND2;
    ctx.beginPath();
    ctx.moveTo(-9, -70); ctx.lineTo(-17, -68); ctx.lineTo(-14, -68);
    ctx.closePath(); ctx.fill();

    // ── SPIKY HAIR ABOVE BANDANA ──────────────────────────────────────────
    ctx.fillStyle = '#111';
    const spikes = [[-7, -78], [-2, -83], [4, -80], [9, -75]];
    for (const [sx, sy] of spikes) {
      ctx.beginPath();
      ctx.moveTo(sx - 4, -69);
      ctx.lineTo(sx, sy);
      ctx.lineTo(sx + 4, -69);
      ctx.closePath();
      ctx.fill();
    }
    // Subtle highlight on hair
    ctx.fillStyle = '#3a3a3a';
    ctx.beginPath();
    ctx.ellipse(0, -72, 2.5, 4, -0.3, 0, Math.PI * 2);
    ctx.fill();
  }

  // Sporty leg: dark shorts thigh → hoodie-coloured shin → white sneaker.
  _dashLeg(ctx, footX, footRaise, hipY) {
    const fy = footRaise;
    const kx = footX * 0.5;
    const ky = hipY  * 0.5 + fy * 0.5 - 2;

    this._thickSeg(ctx, 0, hipY, kx, ky,      9, '#1a1a2e');  // thigh
    this._thickSeg(ctx, kx, ky, footX, fy - 2, 7, '#ff6835'); // shin (sock)

    // White sneaker with orange stripe
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(footX - 6, fy - 3, 16, 6);
    ctx.fillStyle = '#ff6835';
    ctx.fillRect(footX - 6, fy,     16, 2);
    ctx.fillStyle = '#bbb';
    ctx.fillRect(footX - 6, fy + 2, 16, 2);
  }

  // Draw a filled thick line segment.
  _thickSeg(ctx, x1, y1, x2, y2, thick, color) {
    const dx = x2 - x1, dy = y2 - y1;
    const len = Math.sqrt(dx * dx + dy * dy) || 1;
    const nx = (-dy / len) * (thick / 2);
    const ny = ( dx / len) * (thick / 2);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x1 + nx, y1 + ny);
    ctx.lineTo(x1 - nx, y1 - ny);
    ctx.lineTo(x2 - nx, y2 - ny);
    ctx.lineTo(x2 + nx, y2 + ny);
    ctx.closePath();
    ctx.fill();
  }
}

// CommonJS / module export
if (typeof window !== 'undefined') window.PlatformerCharacter = PlatformerCharacter;
if (typeof module !== 'undefined') module.exports = { PlatformerCharacter };
