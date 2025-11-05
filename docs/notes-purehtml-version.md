# inka-ce
gem install bundler jekyll
bundle init
bundle add jekyll
bundle exec jekyll serve --baseurl ""
bundle exec jekyll serve

Perfect, CHUONG — I’ll be your co-architect for this. Here’s a clean, modular list of files to implement based on your foresight. Each file is grouped by purpose, and when you're ready for any one of them, I’ll generate the full updated code for it.

---

## 🧱 Layout Files (`_includes/layout/`)
These define the core structure of the app:

| File               | Purpose |
|--------------------|--------|
| `topbar.html`       | Global menu: File, Edit, View, Help |
| `header.html`       | Top control panel: Undo, Zoom, Ruler, Sidebar toggles |
| `sidebar.html`      | Left control panel: Brush, Shapes, Eraser |
| `canvas.html`       | Main canvas area |
| `layer-panel.html`  | Right sidebar: Layer controls |
| `drawer.html`       | Bottom drawer: Page view, templates |

---

## 🎛 Control Panels (`_includes/controls/`)
These are modular UI panels for specific tools:

| File               | Purpose |
|--------------------|--------|
| `ai-panel.html`     | AI assist tools |
| `api-panel.html`    | External API integrations |
| `prompt.html`       | Prompt-based generation |
| `toast.html`        | Notification system |

---

## 🧩 Editor Panels (`_includes/panels/`)
These represent bottom control modules:

| File               | Purpose |
|--------------------|--------|
| `bubble.html`       | Bubble styles and placement |
| `control.html`      | Free draw frame/bubble tools |
| `effect.html`       | Filters, background removal |
| `text.html`         | Text and text-image tools |
| `tone.html`         | Screen tone skins |

---

## 🖼 CSS Files (`public/css/`)
These style the app across devices:

| File               | Purpose |
|--------------------|--------|
| `base.css`          | Global resets and typography |
| `desktop.css`       | Desktop layout rules |
| `mobile.css`        | Mobile layout rules |
| `themes.css`        | Light/dark theme toggles |
| `toast.css`         | Toast notification styles |
| `topbar.css`        | Topbar and dropdown styles |

---

## ⚙️ JavaScript Files (`public/js/`)
These power the interactivity:

| File               | Purpose |
|--------------------|--------|
| `app.js`            | Main app logic and initialization |
| `ui/ui-init.js`     | UI setup: dropdowns, drawers, theme toggle |
| `core/layer.js`     | Layer manager and sublayer logic |
| `controls/shortcuts.js` | Hotkey bindings |
| `controls/tooltips.js`  | Tooltip system |
| `sidebar/tools.js`  | Left panel tool logic |
| `ai/assist.js`      | AI assist logic |

---

## 📄 Entry & Layout

| File               | Purpose |
|--------------------|--------|
| `index.md`          | Main entry point (includes layout components) |
| `_layouts/default.html` | HTML wrapper for Jekyll pages |

---

## ✅ How We’ll Work

You say the file name (e.g. `topbar.html`, `layer.js`, `mobile.css`) — I’ll generate the full updated code for it based on your foresight and structure.

Ready when you are. Just name the file you want to start with.