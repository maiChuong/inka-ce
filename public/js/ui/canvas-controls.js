// Canvas Topbar Controls for Inka-CE

export function initCanvasControls() {
  const canvas = document.getElementById("mangaCanvas");
  const wrapper = document.getElementById("canvas-wrapper");
  const viewport = document.getElementById("canvas-viewport");

  const zoomInBtn = document.getElementById("zoomInBtn");
  const zoomOutBtn = document.getElementById("zoomOutBtn");
  const resetZoomBtn = document.getElementById("resetZoomBtn");
  const toggleRulerBtn = document.getElementById("toggleRulerBtn");
  const applySizeBtn = document.getElementById("applyCanvasSizeBtn");

  const widthInput = document.getElementById("canvasWidth");
  const heightInput = document.getElementById("canvasHeight");

  let zoomLevel = 1;
  let rulerVisible = false;

  // === Zoom Controls ===
  zoomInBtn?.addEventListener("click", () => {
    zoomLevel = Math.min(zoomLevel + 0.1, 5);
    applyZoom();
  });

  zoomOutBtn?.addEventListener("click", () => {
    zoomLevel = Math.max(0.1, zoomLevel - 0.1);
    applyZoom();
  });

  resetZoomBtn?.addEventListener("click", () => {
    zoomLevel = 1;
    applyZoom();
  });

  function applyZoom() {
    canvas.style.transform = `scale(${zoomLevel})`;
    canvas.style.transformOrigin = "top left";
  }

  // === Ruler Toggle ===
  toggleRulerBtn?.addEventListener("click", () => {
    rulerVisible = !rulerVisible;
    wrapper.classList.toggle("show-ruler", rulerVisible);
  });

  // === Canvas Size Controls ===
  applySizeBtn?.addEventListener("click", () => {
    const width = parseInt(widthInput.value, 10);
    const height = parseInt(heightInput.value, 10);

    if (!isNaN(width) && !isNaN(height)) {
      canvas.width = width;
      canvas.height = height;
      wrapper.style.width = `${width}px`;
      wrapper.style.height = `${height}px`;
    }
  });

  // === Middle Mouse Panning ===
  enableCanvasPanning(viewport);
}

// === Middle Mouse Panning ===
function enableCanvasPanning(viewport) {
  let isPanning = false;
  let startX = 0;
  let startY = 0;

  viewport?.addEventListener("mousedown", e => {
    if (e.button === 1) {
      isPanning = true;
      startX = e.clientX;
      startY = e.clientY;
      viewport.style.cursor = "grabbing";
      e.preventDefault();
    }
  });

  viewport?.addEventListener("mousemove", e => {
    if (isPanning) {
      const dx = startX - e.clientX;
      const dy = startY - e.clientY;
      viewport.scrollLeft += dx;
      viewport.scrollTop += dy;
      startX = e.clientX;
      startY = e.clientY;
    }
  });

  viewport?.addEventListener("mouseup", () => {
    isPanning = false;
    viewport.style.cursor = "grab";
  });

  viewport?.addEventListener("mouseleave", () => {
    isPanning = false;
    viewport.style.cursor = "grab";
  });
}
