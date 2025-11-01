---
layout: default
title: Inka-CE Manga Editor
---

{% include topbar.html %}

<!-- Sidebar -->
<aside class="sidebar">
  <div class="area-header">Panels</div>
  <div id="sidebar-panels">
    <!-- Panels will be injected here -->
  </div>
</aside>

<!-- Canvas Area -->
<main class="canvas-container">
  <div id="canvas-wrapper">
    <canvas id="mangaCanvas"></canvas>
  </div>
  <div id="canvas-controls">
    <!-- Zoom, crop, layer buttons -->
  </div>
</main>

<!-- Layer Panel -->
<aside id="layer-panel">
  <div class="area-header">Layers</div>
  <div id="layer-controls">
    <!-- Layer buttons and preview -->
  </div>
</aside>

<!-- Bottom Drawer -->
<div id="btm-drawer" class="btm-drawer btm-closed">
  <div id="btm-drawer-handle" class="btm-drawer-handle neon-text">OPEN</div>
  <div class="btm-drawer-content">
    <div id="btm-image-container"></div>
    <button id="btm-scroll-left" class="btm-scroll-btn">&lt;</button>
    <button id="btm-scroll-right" class="btm-scroll-btn">&gt;</button>
  </div>
</div>

<!-- Toast Notifications -->
<div id="sp-manga-toastContainer" class="position-fixed bottom-0 end-0 p-3"></div>
