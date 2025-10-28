// Transform Controls for Inka-CE
window.addEventListener("DOMContentLoaded", () => {
  const canvas = window.canvas;
  if (!canvas) return;

  // === Rotate ===
  const rotateSlider = document.getElementById("rotateAngle");
  const applyRotateBtn = document.getElementById("applyRotateBtn");

  applyRotateBtn?.addEventListener("click", () => {
    const obj = canvas.getActiveObject();
    if (obj) {
      const angle = parseInt(rotateSlider.value) || 0;
      obj.set("angle", angle);
      canvas.requestRenderAll();
      showToast(`Rotated to ${angle}°`, "info");
    }
  });

  // === Flip Horizontal ===
  document.getElementById("flipHorizontalBtn")?.addEventListener("click", () => {
    const obj = canvas.getActiveObject();
    if (obj) {
      obj.toggle("flipX");
      canvas.requestRenderAll();
      showToast("Flipped horizontally.", "info");
    }
  });

  // === Flip Vertical ===
  document.getElementById("flipVerticalBtn")?.addEventListener("click", () => {
    const obj = canvas.getActiveObject();
    if (obj) {
      obj.toggle("flipY");
      canvas.requestRenderAll();
      showToast("Flipped vertically.", "info");
    }
  });

  // === Scale ===
  const scaleSlider = document.getElementById("scaleFactor");
  const applyScaleBtn = document.getElementById("applyScaleBtn");

  applyScaleBtn?.addEventListener("click", () => {
    const obj = canvas.getActiveObject();
    if (obj) {
      const scale = parseInt(scaleSlider.value) / 100;
      obj.scale(scale);
      canvas.requestRenderAll();
      showToast(`Scaled to ${scaleSlider.value}%`, "info");
    }
  });

  // === Crop Square ===
  document.getElementById("cropSquareBtn")?.addEventListener("click", () => {
    const obj = canvas.getActiveObject();
    if (obj && obj.type === "image") {
      const size = Math.min(obj.width, obj.height);
      const cropped = new fabric.Image(obj.getElement(), {
        left: obj.left,
        top: obj.top,
        width: size,
        height: size,
        cropX: 0,
        cropY: 0,
        scaleX: obj.scaleX,
        scaleY: obj.scaleY
      });
      canvas.remove(obj);
      canvas.add(cropped);
      canvas.setActiveObject(cropped);
      canvas.requestRenderAll();
      showToast("Square crop applied.", "success");
    }
  });

  // === Crop Freehand (placeholder) ===
  document.getElementById("cropFreeBtn")?.addEventListener("click", () => {
    showToast("Freehand crop not implemented yet.", "warning");
  });
});
