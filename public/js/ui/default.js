// Default Sidebar Panel Activation for Inka-CE

export function initDefaultPanel() {
  const defaultPanel = document.getElementById("text-panel");
  const defaultTab = document.querySelector('[data-panel="text-panel"]');

  defaultPanel?.classList.remove("hidden");
  defaultTab?.classList.add("active");
}
