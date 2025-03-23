import CS from './CS/index.js';

const canvas = document.getElementById('stickverse-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const cs = new CS(ctx, canvas);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  cs.update();
  requestAnimationFrame(animate);
}

animate();
