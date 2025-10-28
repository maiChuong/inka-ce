// Visual Effects Logic for Inka-CE
window.addEventListener("DOMContentLoaded", () => {
  const canvas = window.canvas;
  if (!canvas) return;

  const effectType = document.getElementById("effectType");
  const effectIntensity = document.getElementById("effectIntensity");
  const applyEffectBtn = document.getElementById("applyEffectBtn");

  applyEffectBtn?.addEventListener("click", () => {
    const type = effectType.value;
    const intensity = parseInt(effectIntensity.value) || 50;

    const obj = canvas.getActiveObject();
    if (!obj || !obj.filters) return showToast("Select an object to apply effect.", "warning");

    obj.filters = [];

    switch (type) {
      case "blur":
        obj.filters.push(new fabric.Image.filters.Blur({ blur: intensity / 100 }));
        break;
      case "glow":
        obj.shadow = {
          color: "#fff",
          blur: intensity,
          offsetX: 0,
          offsetY: 0
        };
        break;
      case "contrast":
        obj.filters.push(new fabric.Image.filters.Contrast({ contrast: intensity / 100 }));
        break;
      case "grayscale":
        obj.filters.push(new fabric.Image.filters.Grayscale());
        break;
      case "invert":
        obj.filters.push(new fabric.Image.filters.Invert());
        break;
      case "pixelate":
        obj.filters.push(new fabric.Image.filters.Pixelate({ blocksize: Math.max(1, intensity / 10) }));
        break;
      case "tone-c2bw":
        obj.filters.push(new fabric.Image.filters.BlackWhite());
        break;
      case "tone-c2c":
        obj.filters.push(new fabric.Image.filters.Sepia());
        break;
      default:
        return showToast("Unknown effect type.", "error");
    }

    obj.applyFilters();
    canvas.requestRenderAll();
    showToast(`Applied ${type} effect.`, "success");
  });
});
