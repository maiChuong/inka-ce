// public/js/ui/ui-init.js

import { initThemeToggle } from './theme.js';
import { initPanelTabs } from './panels.js';
import { initBottomDrawer, initScrollButtons } from './preview.js';
import { initToastSystem } from './toast.js';
import { initDefaultPanel } from './default.js';
import { initTopbarDropdowns, initTopbarMobileToggle } from './menu.js';
import { initCanvasControls } from './canvas-controls.js';

export function initUI() {
  initThemeToggle();
  initPanelTabs();
  initBottomDrawer();
  initScrollButtons();
  initToastSystem();
  initDefaultPanel();
  initTopbarDropdowns();
  initTopbarMobileToggle();
  initCanvasControls();
}
