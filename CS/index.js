// index.js
import { drawStickman, drawSpeechBubble } from './CSRenderer.js';
import { moveCS } from './CSMovement.js';
import { maybeTriggerDialogue, updateDialogue } from './CSDialogue.js';

class CS {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;

    this.x = canvas.width / 2;
    this.y = canvas.height - 100;
    this.direction = Math.random() < 0.5 ? 1 : -1;
    this.speed = 1 + Math.random();
    this.step = 0;

    this.dialogue = null;
    this.dialogueCooldown = 0;
  }

  update() {
    moveCS(this);
    maybeTriggerDialogue(this);
    updateDialogue(this);
    drawStickman(this.ctx, this.x, this.y);
    drawSpeechBubble(this.ctx, this);
  }
}

export default CS;
