Inka-ee is nextjs Vercel app page

# Foresight of features
Inka-ce is jekyll Github static page

## Topbar menu
File
Edit
View
Help


## Top control panel
Undo
Redo
Zoom-in on Canvas
Zoom-out on Canvas
Ruler
Hide Layer right sidebar
Hid Panel left sidebar


## Main Leftside control panel
Mouse selection
Paint brush
Shapes
Eraser
Remove All


## Bottom control panel
Page: select page templates (Social page, custom size)
Wireframes: Vertical frames, Landscape frames
Bubbles
Free Draw Frames/Bubbles: Select, Point, Hand, Move, Delete
Text: Text Image
Tone: Screen tone skins
Properties: control image size, skew.


## Bottom Page view [OPEN]
Single page
Multiple page sequence


## Layers
Fixed control panel: Up and down order, undo, redo
Crop selected image
View
Lock
Download
X delete
Effect: filters
Image background removal (npm)


## Code features
Tooltips
Hotkey (Shortcut)


## Object types that shall be listed in the Layers
Polygon frame with attached sub control panel: add image from layers, zoon-in, zoom-out, hand free drag image inside polygon, flip vertical, flip horizontal, rotate image not polygon, delete image. These image is sublayer of polygon layer
Image selection: 
Draw layer
Text
Bubble


====
Here’s a fully refactored version of `ui-init.js`, CHUONG — now modular, readable, and ready for separation of concerns. I’ve grouped each feature into its own file recommendation and added a new `initCanvasControls()` hook to support your canvas-topbar logic.

---

## ✅ Refactored `ui-init.js`

```js
// UI Initialization for Inka-CE

import { initThemeToggle } from './core/theme.js';
import { initPanelTabs } from './sidebar/panels.js';
import { initBottomDrawer, initScrollButtons } from './drawer/preview.js';
import { initToastSystem } from './controls/toast.js';
import { initDefaultPanel } from './sidebar/default.js';
import { initTopbarDropdowns, initTopbarMobileToggle } from './topbar/menu.js';
import { initCanvasControls } from './canvas/controls.js';

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
```

---

## ✅ Recommended File Structure

Here’s how you can split the logic for maintainability:

### 📁 `public/js/core/`
| File         | Purpose |
|--------------|--------|
| `theme.js`    | Handles theme toggling (`theme-light` / `theme-dark`) |

### 📁 `public/js/sidebar/`
| File             | Purpose |
|------------------|--------|
| `panels.js`       | Handles panel tab switching |
| `default.js`      | Activates default panel on load |

### 📁 `public/js/topbar/`
| File             | Purpose |
|------------------|--------|
| `menu.js`         | Handles dropdowns and mobile toggle |

### 📁 `public/js/drawer/`
| File             | Purpose |
|------------------|--------|
| `preview.js`      | Handles drawer open/close and scroll buttons |

### 📁 `public/js/controls/`
| File             | Purpose |
|------------------|--------|
| `toast.js`        | Toast notification system |

### 📁 `public/js/canvas/`
| File             | Purpose |
|------------------|--------|
| `controls.js`     | Handles canvas zoom, reset, ruler toggle, and dimension changes |

---

## ✅ Next Step

Let me know which module you'd like me to generate next — for example, I can start with `canvas/controls.js` to wire up your canvas-topbar buttons and dimension inputs. Ready when you are.


📁 core/
File	Purpose
canvas.js	Canvas setup, resizing, zoom, ruler
layers.js	Layer stack logic
📁 features/
File	Purpose
bubble.js	Bubble panel logic
control.js	Frame/bubble control logic
effect.js	Filters and effects
text.js	Text editing
tone.js	Screen tone skins
📁 controls/
File	Purpose
ai-panel.js	AI assist UI
api-panel.js	API integration UI
prompt.js	Prompt input UI
📁 ai/
File	Purpose
model.js	AI model setup
prompt.js	Prompt generation logic
📁 ui/
File	Purpose
ui-init.js	UI bootstrapping
toast.js	Toast system
menu.js	Topbar dropdowns and mobile toggle. x
preview.js	Bottom drawer logic. x
theme.js	Theme toggling
panels.js	Sidebar tab switching
default.js	Default panel activation
canvas-controls.js	Canvas topbar controls (zoom, ruler, size)