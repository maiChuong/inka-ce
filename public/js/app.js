// public/js/app.js

// 🧠 AI Modules
// import { initModel } from './ai/model.js';
// import { initPromptAI } from './ai/prompt.js';


// 🎛️ Control Panels
// import { initAIPanel } from './controls/ai-panel.js';
// import { initAPIPanel } from './controls/api-panel.js';
// import { initPromptPanel } from './controls/prompt.js';

// 🎨 Core Canvas
import { initCanvas } from './core/canvas.js';
import { initLayers } from './core/layers.js';

// 📚 Sidebar Features
import { initBubble } from './sidebar/bubble.js';
import { initControlSidebar } from './sidebar/control.js';
import { initEffect } from './sidebar/effect.js';
import { initText } from './sidebar/text.js';
import { initTone } from './sidebar/tone.js';

// 🖼️ UI Elements
import { initToast } from './ui/toast.js';
import { initUI } from './ui/ui-init.js';

function initApp() {
  try {
    // Initialize AI
    // initModel();
    // initPromptAI();

    // Initialize Controls
    // initAIPanel();
    // initAPIPanel();
    // initPromptPanel();

    // Initialize Canvas Core
    initCanvas();
    initLayers();

    // Initialize Sidebar
    initBubble();
    initControlSidebar();
    initEffect();
    initText();
    initTone();

    // Initialize UI
    initToast();
    initUI();
  } catch (e) {
    console.error('[Init] App initialization failed:', e);
  }
}

document.addEventListener('DOMContentLoaded', initApp);
