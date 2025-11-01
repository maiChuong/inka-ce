// Tone Effect Logic for Inka-CE

export function initTone() {
  const canvas = window.canvas;
  if (!canvas) return;

  const toneType = document.getElementById("toneType");
  const toneIntensity = document.getElementById("toneIntensity");
  const toneBlend = document.getElementById("toneBlend");
  const applyToneBtn = document.getElementById("applyToneBtn");

  applyToneBtn?.addEventListener("click", () => {
    const type = toneType.value;
    const intensity = parseInt(toneIntensity.value) || 50;
    const blend = toneBlend.value;

    const imagePath = `../public/images/tone-${type}.png`;

    fabric.Image.fromURL(imagePath, img => {
      img.set({
        left: 0,
        top: 0,
        opacity: intensity / 100,
        selectable: false,
        evented: false,
        globalCompositeOperation: blend
      });

      img.scaleToWidth(canvas.getWidth());
      img.scaleToHeight(canvas.getHeight());

      canvas.add(img);
      canvas.sendToBack(img);
      canvas.requestRenderAll();
      showToast(`Applied ${type} tone.`, "success");
    }, { crossOrigin: "anonymous" });
  });
}
