// CSMovement.js

export function moveCS(cs) {
  cs.step++;
  if (cs.step % 2 === 0) cs.x += cs.direction * cs.speed;

  if (cs.x < 30 || cs.x > cs.canvas.width - 30) {
    cs.direction *= -1;
  }
}
