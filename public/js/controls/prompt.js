// AI Prompt Submission Logic for Inka-CE
window.addEventListener("DOMContentLoaded", () => {
  const promptInput = document.getElementById("aiPrompt");
  const negativeInput = document.getElementById("negativePrompt");
  const modelSelect = document.getElementById("modelSelect");
  const cfgScale = document.getElementById("cfgScale");
  const seedInput = document.getElementById("seedInput");
  const generateBtn = document.getElementById("generateImageBtn");

  generateBtn?.addEventListener("click", () => {
    const prompt = promptInput.value.trim();
    const negative = negativeInput.value.trim();
    const model = modelSelect.value;
    const cfg = parseFloat(cfgScale.value) || 7;
    const seed = seedInput.value ? parseInt(seedInput.value) : Math.floor(Math.random() * 100000);

    if (!prompt) return showToast("Prompt is empty.", "warning");

    const payload = {
      prompt,
      negative_prompt: negative,
      model,
      cfg_scale: cfg,
      seed
    };

    showToast("Generating image...", "info");

    // Replace with actual API call
    fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(data => {
        if (data.imageUrl) {
          const img = new Image();
          img.src = data.imageUrl;
          img.onload = () => {
            const fabricImg = new fabric.Image(img, {
              left: 50,
              top: 50,
              selectable: true
            });
            canvas.add(fabricImg);
            canvas.setActiveObject(fabricImg);
            canvas.requestRenderAll();
            showToast("Image generated successfully.", "success");
          };
        } else {
          showToast("Image generation failed.", "error");
        }
      })
      .catch(err => {
        console.error(err);
        showToast("Error contacting generation API.", "error");
      });
  });
});
