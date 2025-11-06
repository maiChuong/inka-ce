// public/js/app.js

// 🎨 Core Canvas
import { initCanvas } from './core/canvas.js';
import { initLayers } from './core/layers.js';

// 📚 Feature Panels
import { initBubble } from './features/bubble.js';
import { initControlSidebar } from './features/control.js';
import { initEffect } from './features/effect.js';
import { initText } from './features/text.js';
import { initTone } from './features/tone.js';

// 🧠 AI Modules (optional)
const enableAI = false;
if (enableAI) {
  import('./ai/model.js').then(({ initModel }) => initModel());
  import('./ai/prompt.js').then(({ initPromptAI }) => initPromptAI());
  import('./controls/ai-panel.js').then(({ initAIPanel }) => initAIPanel());
  import('./controls/api-panel.js').then(({ initAPIPanel }) => initAPIPanel());
  import('./controls/prompt.js').then(({ initPromptPanel }) => initPromptPanel());
}

// 🖼️ UI Elements
import { showToast } from './ui/toast.js';
import { initUI } from './ui/ui-init.js';

function initApp() {
  try {
    initCanvas();
    initLayers();

    initBubble();
    initControlSidebar();
    initEffect();
    initText();
    initTone();

    showToast();
    initUI();
  } catch (e) {
    console.error('[Init] App initialization failed:', e);
  }
}

document.addEventListener('DOMContentLoaded', initApp);
