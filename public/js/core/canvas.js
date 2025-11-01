// Canvas Core Logic for Inka-CE

let canvas;
let zoomLevel = 1;

export function initCanvas() {
  const canvasEl = document.getElementById("mangaCanvas");
  if (!canvasEl) return;

  // Initialize canvas with fabric.js
  canvas = new fabric.Canvas("mangaCanvas", {
    preserveObjectStacking: true,
    selection: true,
    backgroundColor: "#fff"
  });

  // === Zoom Controls ===
  document.getElementById("zoomInBtn")?.addEventListener("click", () => {
    zoomLevel = Math.min(zoomLevel + 0.1, 3);
    canvas.setZoom(zoomLevel);
    canvas.requestRenderAll();
  });

  document.getElementById("zoomOutBtn")?.addEventListener("click", () => {
    zoomLevel = Math.max(zoomLevel - 0.1, 0.3);
    canvas.setZoom(zoomLevel);
    canvas.requestRenderAll();
  });

  document.getElementById("resetZoomBtn")?.addEventListener("click", () => {
    zoomLevel = 1;
    canvas.setZoom(zoomLevel);
    canvas.requestRenderAll();
  });

  // === Resize Canvas on Window Resize ===
  function resizeCanvas() {
    const wrapper = document.getElementById("canvas-wrapper");
    if (!wrapper) return;
    const width = wrapper.clientWidth;
    const height = wrapper.clientHeight;
    canvas.setWidth(width);
    canvas.setHeight(height);
    canvas.requestRenderAll();
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  // === Layer Toggle ===
  document.getElementById("toggleLayersBtn")?.addEventListener("click", () => {
    const panel = document.getElementById("layer-panel");
    panel?.classList.toggle("hidden");
  });

  // === Export Canvas as Image ===
  document.getElementById("btnExportImage")?.addEventListener("click", () => {
    const dataURL = canvas.toDataURL({
      format: "png",
      quality: 1
    });
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "inka-export.png";
    link.click();
  });

  // === Save Canvas State (optional) ===
  document.getElementById("btnSaveProject")?.addEventListener("click", () => {
    const json = canvas.toJSON();
    localStorage.setItem("inkaProject", JSON.stringify(json));
    showToast("Project saved locally!", "success");
  });

  // === Load Canvas State (optional) ===
  const saved = localStorage.getItem("inkaProject");
  if (saved) {
    canvas.loadFromJSON(saved, () => {
      canvas.requestRenderAll();
      showToast("Project loaded from local storage.", "info");
    });
  }

  // Make canvas globally accessible if needed
  window.canvas = canvas;
}
