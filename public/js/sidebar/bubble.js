// Speech Bubble Tool for Inka-CE
window.addEventListener("DOMContentLoaded", () => {
  const canvas = window.canvas;
  if (!canvas) return;

  const bubbleText = document.getElementById("bubbleText");
  const bubbleShape = document.getElementById("bubbleShape");
  const tailDirection = document.getElementById("tailDirection");
  const bubblePadding = document.getElementById("bubblePadding");
  const bubbleStroke = document.getElementById("bubbleStroke");
  const addBubbleBtn = document.getElementById("addBubbleBtn");

  addBubbleBtn?.addEventListener("click", () => {
    const text = bubbleText.value.trim();
    if (!text) return showToast("Bubble text is empty.", "warning");

    const shape = bubbleShape.value;
    const tail = tailDirection.value;
    const padding = parseInt(bubblePadding.value) || 12;
    const strokeWidth = parseInt(bubbleStroke.value) || 2;

    // Create text box
    const textbox = new fabric.Textbox(text, {
      fontSize: 20,
      fill: "#000",
      textAlign: "center",
      width: 200,
      editable: true
    });

    // Create bubble background
    const bubble = new fabric.Rect({
      width: textbox.width + padding * 2,
      height: textbox.height + padding * 2,
      fill: "#fff",
      stroke: "#000",
      strokeWidth: strokeWidth,
      rx: shape === "rounded" ? 16 : shape === "cloud" ? 32 : 0,
      ry: shape === "rounded" ? 16 : shape === "cloud" ? 32 : 0
    });

    // Group bubble + text
    const group = new fabric.Group([bubble, textbox], {
      left: 100,
      top: 100,
      name: `Bubble ${Date.now()}`
    });

    // Add tail if needed
    if (tail !== "none") {
      const tailShape = new fabric.Triangle({
        width: 20,
        height: 20,
        fill: "#fff",
        stroke: "#000",
        strokeWidth: strokeWidth,
        angle: tail === "top" ? 180 : tail === "bottom" ? 0 : tail === "left" ? 90 : 270,
        left: group.left + (tail === "left" ? -20 : tail === "right" ? group.width : group.width / 2),
        top: group.top + (tail === "top" ? -20 : tail === "bottom" ? group.height : group.height / 2),
        originX: "center",
        originY: "center"
      });
      canvas.add(tailShape);
    }

    canvas.add(group);
    canvas.setActiveObject(group);
    canvas.requestRenderAll();
    showToast("Speech bubble added.", "success");
  });
});
