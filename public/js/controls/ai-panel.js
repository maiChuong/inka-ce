// public/js/controls/ai-panel.js

export function initAIPanel() {
  window.addEventListener("DOMContentLoaded", () => {
    const backendSelect = document.getElementById("backendSelect");
    const imageWidth = document.getElementById("imageWidth");
    const imageHeight = document.getElementById("imageHeight");
    const samplerSelect = document.getElementById("samplerSelect");
    const samplingSteps = document.getElementById("samplingSteps");
    const batchSize = document.getElementById("batchSize");
    const enableAdvanced = document.getElementById("enableAdvanced");
    const applySettingsBtn = document.getElementById("applyAISettingsBtn");

    window.aiSettings = {
      backend: "diffusers",
      width: 768,
      height: 768,
      sampler: "euler",
      steps: 30,
      batch: 1,
      advanced: false
    };

    applySettingsBtn?.addEventListener("click", () => {
      const backend = backendSelect.value;
      const width = parseInt(imageWidth.value) || 768;
      const height = parseInt(imageHeight.value) || 768;
      const sampler = samplerSelect.value;
      const steps = parseInt(samplingSteps.value) || 30;
      const batch = parseInt(batchSize.value) || 1;
      const advanced = enableAdvanced.checked;

      window.aiSettings = {
        backend,
        width,
        height,
        sampler,
        steps,
        batch,
        advanced
      };

      showToast("AI settings applied.", "success");
      console.log("Updated AI Settings:", window.aiSettings);
    });
  });
}
