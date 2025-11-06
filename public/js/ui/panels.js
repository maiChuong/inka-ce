// Sidebar Panel Tab Switching for Inka-CE

export function initPanelTabs() {
  const tabs = document.querySelectorAll(".panel-tab");
  const panels = document.querySelectorAll(".panel-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("data-panel");

      // Deactivate all tabs
      tabs.forEach(t => t.classList.remove("active"));

      // Hide all panels
      panels.forEach(panel => panel.classList.add("hidden"));

      // Activate selected tab
      tab.classList.add("active");

      // Show corresponding panel
      const targetPanel = document.getElementById(targetId);
      targetPanel?.classList.remove("hidden");
    });
  });

  // Optional: Activate first tab on load
  const firstTab = tabs[0];
  const firstPanelId = firstTab?.getAttribute("data-panel");
  if (firstTab && firstPanelId) {
    firstTab.classList.add("active");
    document.getElementById(firstPanelId)?.classList.remove("hidden");
  }
}
