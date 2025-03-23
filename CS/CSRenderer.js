// CSRenderer.js
import { wrapText } from './CSUtils.js';

export function drawStickman(ctx, x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2); // Head
  ctx.stroke();

  ctx.beginPath(); // Body
  ctx.moveTo(x, y + 20);
  ctx.lineTo(x, y + 60);
  ctx.stroke();

  ctx.beginPath(); // Arms
  ctx.moveTo(x - 15, y + 40);
  ctx.lineTo(x + 15, y + 40);
  ctx.stroke();

  ctx.beginPath(); // Legs
  ctx.moveTo(x, y + 60);
  ctx.lineTo(x - 15, y + 90);
  ctx.moveTo(x, y + 60);
  ctx.lineTo(x + 15, y + 90);
  ctx.stroke();
}

export function drawSpeechBubble(ctx, cs) {
  if (!cs.dialogue) return;

  const padding = 10;
  const maxWidth = 160;
  const bubbleX = cs.x - 80;
  const bubbleY = cs.y - 70;

  ctx.font = "12px monospace";
  ctx.fillStyle = "#fff";
  ctx.strokeStyle = "#333";
  ctx.lineWidth = 2;

  const lines = wrapText(ctx, cs.dialogue.text, maxWidth);

  const bubbleWidth = maxWidth + padding * 2;
  const bubbleHeight = lines.length * 16 + padding * 2;

  ctx.beginPath();
  ctx.rect(bubbleX, bubbleY, bubbleWidth, bubbleHeight);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#000";
  lines.forEach((line, i) => {
    ctx.fillText(line, bubbleX + padding, bubbleY + padding + i * 16);
  });
}
