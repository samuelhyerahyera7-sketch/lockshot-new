const canvas = document.querySelector("#runner");
const ctx = canvas.getContext("2d");
const scoreEl = document.querySelector("#score");
const coinsEl = document.querySelector("#coins");
const menu = document.querySelector("#menu");
const gameOver = document.querySelector("#gameOver");
const finalScore = document.querySelector("#finalScore");
const startButton = document.querySelector("#start");
const restartButton = document.querySelector("#restart");

const world = { width: 960, height: 540 };
const groundY = 434;
const gravity = 2350;
const keys = new Set();

let runner;
let characterSprite;
let obstacles = [];
let coins = [];
let clouds = [];
let score = 0;
let coinCount = 0;
let speed = 410;
let distance = 0;
let spawnTimer = 0;
let coinTimer = 0;
let running = false;
let lastTime = 0;
let frameId = 0;

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(rect.width * dpr);
  canvas.height = Math.round(rect.height * dpr);
  ctx.setTransform(canvas.width / world.width, 0, 0, canvas.height / world.height, 0, 0);
}

function resetGame() {
  const CharacterClass = window.PlatformerCharacter;
  if (CharacterClass) {
    characterSprite = new CharacterClass(0, 0);
  } else {
    characterSprite = null;
  }

  runner = {
    x: 128,
    y: groundY - 94,
    width: 58,
    height: 94,
    vy: 0,
    grounded: true,
    blink: 0,
  };

  obstacles = [];
  coins = [];
  clouds = [
    { x: 120, y: 82, scale: 1.05 },
    { x: 480, y: 58, scale: 0.82 },
    { x: 760, y: 120, scale: 1.22 },
  ];
  score = 0;
  coinCount = 0;
  speed = 410;
  distance = 0;
  spawnTimer = 0.8;
  coinTimer = 1.2;
  updateHud();
}

function startGame() {
  if (running) return;
  resetGame();
  running = true;
  menu.classList.add("hidden");
  gameOver.classList.add("hidden");
  lastTime = performance.now();
  frameId = requestAnimationFrame(loop);
}

function finishGame() {
  running = false;
  finalScore.textContent = `Score: ${score} | Coins: ${coinCount}`;
  gameOver.classList.remove("hidden");
}

function updateHud() {
  scoreEl.textContent = score.toString();
  coinsEl.textContent = coinCount.toString();
}

function jump() {
  if (!running) return;
  if (runner.grounded) {
    runner.vy = -780;
    runner.grounded = false;
  }
}

function spawnObstacle() {
  const kind = Math.random();
  if (kind < 0.45) {
    obstacles.push({ type: "cone", x: world.width + 30, y: groundY - 70, width: 56, height: 70 });
  } else if (kind < 0.78) {
    obstacles.push({ type: "barrier", x: world.width + 30, y: groundY - 62, width: 86, height: 62 });
  } else {
    obstacles.push({ type: "sign", x: world.width + 30, y: groundY - 96, width: 76, height: 96 });
  }
}

function spawnCoins() {
  const baseY = groundY - (130 + Math.random() * 92);
  for (let i = 0; i < 5; i += 1) {
    coins.push({
      x: world.width + 60 + i * 46,
      y: baseY + Math.sin(i * 0.8) * 18,
      radius: 14,
      taken: false,
      spin: Math.random() * Math.PI * 2,
    });
  }
}

function update(dt) {
  distance += speed * dt;
  speed = Math.min(735, 410 + distance * 0.024);
  score = Math.floor(distance / 16) + coinCount * 10;

  runner.vy += gravity * dt;
  runner.y += runner.vy * dt;
  if (runner.y + runner.height >= groundY) {
    runner.y = groundY - runner.height;
    runner.vy = 0;
    runner.grounded = true;
  }

  spawnTimer -= dt;
  coinTimer -= dt;
  if (spawnTimer <= 0) {
    spawnObstacle();
    spawnTimer = 0.9 + Math.random() * 0.82 - Math.min(distance / 13000, 0.32);
  }
  if (coinTimer <= 0) {
    spawnCoins();
    coinTimer = 1.35 + Math.random() * 1.1;
  }

  for (const cloud of clouds) {
    cloud.x -= speed * 0.08 * dt;
    if (cloud.x < -140) {
      cloud.x = world.width + 80 + Math.random() * 160;
      cloud.y = 48 + Math.random() * 94;
      cloud.scale = 0.75 + Math.random() * 0.55;
    }
  }

  for (const obstacle of obstacles) obstacle.x -= speed * dt;
  for (const coin of coins) {
    coin.x -= speed * dt;
    coin.spin += dt * 9;
  }
  obstacles = obstacles.filter((obstacle) => obstacle.x + obstacle.width > -40);
  coins = coins.filter((coin) => coin.x > -40 && !coin.taken);

  const hitbox = {
    x: runner.x + 9,
    y: runner.y + 9,
    width: runner.width - 16,
    height: runner.height - 12,
  };

  for (const obstacle of obstacles) {
    if (rectsOverlap(hitbox, obstacle)) {
      finishGame();
      return;
    }
  }

  for (const coin of coins) {
    const closeX = Math.abs(coin.x - (runner.x + runner.width / 2)) < coin.radius + runner.width * 0.44;
    const closeY = Math.abs(coin.y - (runner.y + runner.height / 2)) < coin.radius + runner.height * 0.42;
    if (closeX && closeY) {
      coin.taken = true;
      coinCount += 1;
    }
  }

  updateHud();
}

function rectsOverlap(a, b) {
  return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
}

function draw() {
  drawSky();
  drawHills();
  clouds.forEach(drawCloud);
  drawGround();
  coins.forEach(drawCoin);
  obstacles.forEach(drawObstacle);
  drawRunner();
}

function drawSky() {
  const sky = ctx.createLinearGradient(0, 0, 0, world.height);
  sky.addColorStop(0, "#77cfff");
  sky.addColorStop(0.62, "#c9f0ff");
  sky.addColorStop(1, "#fbe8aa");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, world.width, world.height);

  ctx.fillStyle = "#fff0a6";
  ctx.beginPath();
  ctx.arc(820, 78, 42, 0, Math.PI * 2);
  ctx.fill();
}

function drawHills() {
  ctx.fillStyle = "#64be76";
  ctx.beginPath();
  ctx.moveTo(0, groundY);
  ctx.quadraticCurveTo(120, 270, 270, groundY);
  ctx.quadraticCurveTo(430, 282, 605, groundY);
  ctx.quadraticCurveTo(780, 292, 960, groundY);
  ctx.lineTo(world.width, world.height);
  ctx.lineTo(0, world.height);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#3f9c63";
  for (let x = -80; x < world.width + 120; x += 160) {
    ctx.beginPath();
    ctx.arc(x + ((distance * 0.12) % 160), groundY + 34, 85, Math.PI, 0);
    ctx.fill();
  }
}

function drawCloud(cloud) {
  ctx.save();
  ctx.translate(cloud.x, cloud.y);
  ctx.scale(cloud.scale, cloud.scale);
  ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
  ctx.beginPath();
  ctx.arc(0, 18, 24, 0, Math.PI * 2);
  ctx.arc(30, 8, 30, 0, Math.PI * 2);
  ctx.arc(64, 18, 24, 0, Math.PI * 2);
  ctx.fillRect(-5, 18, 78, 28);
  ctx.fill();
  ctx.restore();
}

function drawGround() {
  ctx.fillStyle = "#8d5b32";
  ctx.fillRect(0, groundY, world.width, world.height - groundY);
  ctx.fillStyle = "#5c3825";
  ctx.fillRect(0, groundY + 18, world.width, 10);

  const tileOffset = -((distance * 0.72) % 56);
  for (let x = tileOffset; x < world.width; x += 56) {
    ctx.fillStyle = "#b9783c";
    ctx.fillRect(x, groundY, 52, 18);
    ctx.fillStyle = "rgba(255, 218, 139, 0.35)";
    ctx.fillRect(x + 6, groundY + 5, 28, 4);
  }
}

function drawCoin(coin) {
  ctx.save();
  ctx.translate(coin.x, coin.y);
  ctx.scale(Math.max(0.28, Math.abs(Math.cos(coin.spin))), 1);
  ctx.fillStyle = "#ffd84d";
  ctx.strokeStyle = "#b76a1d";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(0, 0, coin.radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#fff2a3";
  ctx.fillRect(-3, -9, 6, 18);
  ctx.restore();
}

function drawObstacle(obstacle) {
  if (obstacle.type === "cone") {
    drawCone(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  } else if (obstacle.type === "barrier") {
    drawBarrier(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  } else {
    drawSign(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  }
}

function drawCone(x, y, width, height) {
  ctx.save();
  ctx.strokeStyle = "#6b3720";
  ctx.lineWidth = 4;
  ctx.fillStyle = "#f77f2f";
  ctx.beginPath();
  ctx.moveTo(x + width / 2, y);
  ctx.lineTo(x + width - 9, y + height - 12);
  ctx.lineTo(x + 9, y + height - 12);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#fff1c6";
  ctx.beginPath();
  ctx.moveTo(x + 22, y + 28);
  ctx.lineTo(x + width - 20, y + 28);
  ctx.lineTo(x + width - 15, y + 42);
  ctx.lineTo(x + 16, y + 42);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#5a3d34";
  ctx.fillRect(x, y + height - 14, width, 14);
  ctx.strokeRect(x, y + height - 14, width, 14);
  ctx.restore();
}

function drawBarrier(x, y, width, height) {
  ctx.save();
  ctx.strokeStyle = "#3d3340";
  ctx.lineWidth = 4;
  ctx.fillStyle = "#2f3548";
  ctx.fillRect(x + 8, y + 12, width - 16, height - 20);
  ctx.strokeRect(x + 8, y + 12, width - 16, height - 20);

  ctx.fillStyle = "#ffd84d";
  ctx.beginPath();
  ctx.moveTo(x + 15, y + 18);
  ctx.lineTo(x + 35, y + 18);
  ctx.lineTo(x + width - 16, y + height - 21);
  ctx.lineTo(x + width - 36, y + height - 21);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#ef5f36";
  ctx.fillRect(x, y + height - 12, width, 12);
  ctx.strokeRect(x, y + height - 12, width, 12);
  ctx.restore();
}

function drawSign(x, y, width, height) {
  ctx.save();
  ctx.strokeStyle = "#3d3340";
  ctx.lineWidth = 4;
  ctx.fillStyle = "#35495e";
  ctx.fillRect(x + width / 2 - 6, y + 34, 12, height - 34);
  ctx.strokeRect(x + width / 2 - 6, y + 34, 12, height - 34);

  ctx.fillStyle = "#ffdf5e";
  ctx.beginPath();
  ctx.roundRect(x, y, width, 48, 8);
  ctx.fill();
  ctx.stroke();

  ctx.strokeStyle = "#3d3340";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(x + 18, y + 32);
  ctx.lineTo(x + width - 18, y + 16);
  ctx.stroke();
  ctx.restore();
}

function drawRunner() {
  if (characterSprite) {
    const state = !runner.grounded ? (runner.vy < 0 ? "jump" : "fall") : "run";
    characterSprite.state = state;
    characterSprite.facingRight = true;
    characterSprite._animFrame = state === "run" ? Math.floor(distance / 26) % 4 : 0;
    characterSprite._sx = runner.grounded ? 1 : 0.9;
    characterSprite._sy = runner.grounded ? 1 : 1.08;

    ctx.save();
    ctx.translate(Math.round(runner.x + runner.width / 2), Math.round(runner.y + runner.height));
    ctx.scale(1.55, 1.55);
    characterSprite._paint(ctx);
    ctx.restore();
    return;
  }

  const cycle = runner.grounded ? distance * 0.085 : 1.2;
  const stride = Math.sin(cycle);
  const counterStride = Math.sin(cycle + Math.PI);
  const lift = Math.max(0, Math.sin(cycle));
  const counterLift = Math.max(0, Math.sin(cycle + Math.PI));
  const bob = runner.grounded ? Math.abs(Math.sin(cycle)) * -4 : -5;
  const x = runner.x;
  const y = runner.y + bob;
  const hip = { x: x + 33, y: y + 69 };
  const shoulder = { x: x + 35, y: y + 40 };
  const head = { x: x + 43, y: y + 21 };

  ctx.save();
  ctx.lineJoin = "round";
  ctx.lineCap = "round";

  const rearKnee = { x: x + 19 - stride * 17, y: y + 85 - lift * 20 };
  const rearFoot = { x: x + 4 - stride * 26, y: y + 100 - lift * 7 };
  const frontKnee = { x: x + 48 - counterStride * 17, y: y + 86 - counterLift * 20 };
  const frontFoot = { x: x + 66 - counterStride * 25, y: y + 100 - counterLift * 7 };

  drawLimb(hip.x - 5, hip.y, rearKnee.x, rearKnee.y, rearFoot.x, rearFoot.y, "#1556b3", 15);
  drawLimb(hip.x + 10, hip.y, frontKnee.x, frontKnee.y, frontFoot.x, frontFoot.y, "#246ad0", 15);

  drawShoe(rearFoot.x, rearFoot.y, stride < 0 ? -1 : 1, "#6b3b21");
  drawShoe(frontFoot.x, frontFoot.y, counterStride < 0 ? -1 : 1, "#6b3b21");

  const rearHand = { x: x + 9 + counterStride * 20, y: y + 65 + counterLift * 8 };
  const frontHand = { x: x + 63 + stride * 18, y: y + 48 + lift * 7 };
  drawLimb(shoulder.x - 12, shoulder.y + 9, x + 17 + counterStride * 13, y + 54 + counterLift * 8, rearHand.x, rearHand.y, "#d91f2f", 12);
  drawLimb(shoulder.x + 12, shoulder.y + 8, x + 51 + stride * 12, y + 54 + lift * 8, frontHand.x, frontHand.y, "#d91f2f", 12);

  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = "#20263a";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(rearHand.x, rearHand.y, 7, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(frontHand.x, frontHand.y, 7, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  const torso = ctx.createLinearGradient(0, y + 34, 0, y + 72);
  torso.addColorStop(0, "#e82a39");
  torso.addColorStop(0.52, "#d91f2f");
  torso.addColorStop(0.53, "#1e67d0");
  torso.addColorStop(1, "#124a9e");
  ctx.fillStyle = torso;
  ctx.strokeStyle = "#20263a";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(x + 17, y + 38);
  ctx.quadraticCurveTo(x + 35, y + 29, x + 55, y + 39);
  ctx.lineTo(x + 51, y + 72);
  ctx.quadraticCurveTo(x + 34, y + 82, x + 16, y + 71);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#1e67d0";
  ctx.beginPath();
  ctx.roundRect(x + 23, y + 51, 12, 26, 5);
  ctx.roundRect(x + 39, y + 51, 12, 26, 5);
  ctx.fill();

  ctx.fillStyle = "#ffd857";
  ctx.strokeStyle = "#20263a";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(x + 29, y + 56, 3.5, 0, Math.PI * 2);
  ctx.arc(x + 45, y + 56, 3.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "rgba(255,255,255,0.22)";
  ctx.beginPath();
  ctx.moveTo(x + 25, y + 40);
  ctx.quadraticCurveTo(x + 35, y + 36, x + 47, y + 41);
  ctx.lineTo(x + 44, y + 49);
  ctx.quadraticCurveTo(x + 34, y + 45, x + 26, y + 49);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#f6c493";
  ctx.strokeStyle = "#20263a";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.ellipse(head.x, head.y, 18, 21, -0.08, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#6d3f2c";
  ctx.beginPath();
  ctx.moveTo(x + 26, y + 19);
  ctx.quadraticCurveTo(x + 34, y + 5, x + 57, y + 14);
  ctx.quadraticCurveTo(x + 58, y + 24, x + 44, y + 24);
  ctx.quadraticCurveTo(x + 37, y + 30, x + 28, y + 25);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#e21f33";
  ctx.strokeStyle = "#20263a";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.roundRect(x + 24, y + 1, 39, 18, 8);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(x + 58, y + 15, 17, 7, 0.12, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = "#20263a";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(x + 43, y + 10, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#20263a";
  ctx.beginPath();
  ctx.arc(x + 49, y + 20, 2.7, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "#5b2e22";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(x + 46, y + 31);
  ctx.quadraticCurveTo(x + 53, y + 27, x + 60, y + 31);
  ctx.moveTo(x + 47, y + 35);
  ctx.quadraticCurveTo(x + 53, y + 39, x + 59, y + 34);
  ctx.stroke();

  ctx.restore();
}

function drawLimb(hipX, hipY, kneeX, kneeY, footX, footY, color, width) {
  ctx.strokeStyle = "rgba(32, 38, 58, 0.45)";
  ctx.lineWidth = width + 4;
  ctx.beginPath();
  ctx.moveTo(hipX, hipY);
  ctx.lineTo(kneeX, kneeY);
  ctx.lineTo(footX, footY);
  ctx.stroke();

  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.beginPath();
  ctx.moveTo(hipX, hipY);
  ctx.lineTo(kneeX, kneeY);
  ctx.lineTo(footX, footY);
  ctx.stroke();
}

function drawShoe(x, y, direction, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(direction, 1);
  ctx.fillStyle = color;
  ctx.strokeStyle = "#20263a";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.roundRect(-12, -5, 30, 12, 6);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(3, -1, 10, 3);
  ctx.restore();
}

function loop(time) {
  if (!running) return;
  const dt = Math.min((time - lastTime) / 1000, 0.033);
  lastTime = time;
  update(dt);
  draw();
  frameId = requestAnimationFrame(loop);
}

window.addEventListener("resize", resizeCanvas);
window.addEventListener("keydown", (event) => {
  keys.add(event.key);
  if (event.key === " " || event.key === "ArrowUp" || event.key.toLowerCase() === "w") {
    event.preventDefault();
    jump();
  }
});
window.addEventListener("keyup", (event) => keys.delete(event.key));
canvas.addEventListener("pointerdown", () => {
  if (!running) {
    startGame();
    return;
  }
  jump();
});
startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", startGame);

resizeCanvas();
resetGame();
draw();
setTimeout(startGame, 250);
