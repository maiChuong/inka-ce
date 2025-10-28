// Text Tool Logic for Inka-CE
window.addEventListener("DOMContentLoaded", () => {
  const canvas = window.canvas;
  if (!canvas) return;

  const textInput = document.getElementById("textInput");
  const fontSelect = document.getElementById("fontSelect");
  const fontSizeInput = document.getElementById("fontSize");
  const addTextBtn = document.getElementById("addTextBtn");

  // === Add Text to Canvas ===
  addTextBtn?.addEventListener("click", () => {
    const text = textInput.value.trim();
    if (!text) return showToast("Text is empty.", "warning");

    const font = fontSelect.value;
    const size = parseInt(fontSizeInput.value) || 24;

    const textbox = new fabric.Textbox(text, {
      left: 100,
      top: 100,
      fontFamily: font,
      fontSize: size,
      fill: "#000",
      editable: true,
      name: `Text ${Date.now()}`
    });

    applyTextEffects(textbox);
    canvas.add(textbox);
    canvas.setActiveObject(textbox);
    canvas.requestRenderAll();
    showToast("Text added to canvas.", "success");
  });

  // === Alignment Buttons ===
  document.getElementById("alignLeft")?.addEventListener("click", () => {
    setTextAlign("left");
  });
  document.getElementById("alignCenter")?.addEventListener("click", () => {
    setTextAlign("center");
  });
  document.getElementById("alignRight")?.addEventListener("click", () => {
    setTextAlign("right");
  });

  function setTextAlign(align) {
    const obj = canvas.getActiveObject();
    if (obj && obj.type === "textbox") {
      obj.set({ textAlign: align });
      canvas.requestRenderAll();
    }
  }

  // === Text Effects ===
  const effectButtons = document.querySelectorAll(".text-effect-btn");
  effectButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const effect = btn.dataset.effect;
      const obj = canvas.getActiveObject();
      if (obj && obj.type === "textbox") {
        applyTextEffects(obj, effect);
        canvas.requestRenderAll();
      }
    });
  });

  function applyTextEffects(obj, effect = "shadow") {
    switch (effect) {
      case "shadow":
        obj.set("shadow", "2px 2px 4px rgba(0,0,0,0.4)");
        break;
      case "outline":
        obj.set({
          stroke: "#000",
          strokeWidth: 1
        });
        break;
      case "thrill":
        obj.set({
          fontStyle: "italic",
          fontWeight: "bold",
          fill: "#d00"
        });
        break;
      case "wild":
        obj.set({
          angle: 10 + Math.random() * 20 - 10,
          fill: "#00a",
          fontWeight: "900"
        });
        break;
      case "zebra":
        obj.set({
          fill: "url(#zebra-pattern)" // requires SVG pattern or plugin
        });
        break;
      default:
        obj.set("shadow", null);
        obj.set("stroke", null);
    }
  }
});
