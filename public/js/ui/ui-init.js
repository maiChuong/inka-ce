// UI Initialization for Inka-CE

export function initUI() {
  // === Theme Toggle ===
  const toggleThemeBtn = document.getElementById("toggleThemeBtn");
  toggleThemeBtn?.addEventListener("click", () => {
    const html = document.documentElement;
    html.classList.toggle("theme-light");
    html.classList.toggle("theme-dark");
  });

  // === Panel Tab Switching ===
  const panelTabs = document.querySelectorAll(".panel-tab");
  const panelContents = document.querySelectorAll(".panel-content");

  panelTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("data-panel");
      panelContents.forEach(panel => {
        panel.classList.add("hidden");
      });
      const targetPanel = document.getElementById(targetId);
      targetPanel?.classList.remove("hidden");
    });
  });

  // === Bottom Drawer Toggle ===
  const drawer = document.getElementById("btm-drawer");
  const drawerHandle = document.getElementById("btm-drawer-handle");

  drawerHandle?.addEventListener("click", () => {
    drawer.classList.toggle("btm-closed");
    drawer.classList.toggle("btm-open");
  });

  // === Scroll Buttons ===
  const scrollLeftBtn = document.getElementById("btm-scroll-left");
  const scrollRightBtn = document.getElementById("btm-scroll-right");
  const imageContainer = document.getElementById("btm-image-container");

  scrollLeftBtn?.addEventListener("click", () => {
    imageContainer.scrollBy({ left: -200, behavior: "smooth" });
  });

  scrollRightBtn?.addEventListener("click", () => {
    imageContainer.scrollBy({ left: 200, behavior: "smooth" });
  });

  // === Toast Initialization ===
  window.showToast = function (message, type = "info") {
    const container = document.getElementById("sp-manga-toastContainer");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
  };

  // === Default Panel ===
  const defaultPanel = document.getElementById("text-panel");
  defaultPanel?.classList.remove("hidden");

  // === Topbar Dropdown Toggle ===
  const menuButtons = document.querySelectorAll(".menu-button");
  menuButtons.forEach(button => {
    button.addEventListener("click", e => {
      e.stopPropagation();
      const parentItem = button.closest(".menu-item");
      const isOpen = parentItem.classList.contains("open");

      document.querySelectorAll(".menu-item.open").forEach(item => {
        item.classList.remove("open");
      });

      if (!isOpen) {
        parentItem.classList.add("open");
      }
    });
  });

  // === Close dropdowns when clicking outside ===
  document.addEventListener("click", e => {
    if (!e.target.closest(".menu-item")) {
      document.querySelectorAll(".menu-item.open").forEach(item => item.classList.remove("open"));
    }
  });
}
