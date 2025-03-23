// CSDialogue.js

const quotes = [
  "Built different. Literally.",
  "Gas fees? I walk.",
  "When in doubt, deploy.",
  "My TPS is 1, but it’s personal.",
  "No arms. Still diamond hands.",
  "I minted myself.",
  "I don’t chase pumps. I deploy fundamentals."
];

export function maybeTriggerDialogue(cs) {
  if (Math.random() < 0.005 && cs.dialogueCooldown <= 0) {
    cs.dialogue = {
      text: quotes[Math.floor(Math.random() * quotes.length)],
      timer: 300
    };
    cs.dialogueCooldown = 600;
  } else {
    cs.dialogueCooldown--;
  }
}

export function updateDialogue(cs) {
  if (cs.dialogue) {
    cs.dialogue.timer--;
    if (cs.dialogue.timer <= 0) {
      cs.dialogue = null;
    }
  }
}
