// UI Initialization for Inka-CE

export function initUI() {
  initThemeToggle();
  initPanelTabs();
  initBottomDrawer();
  initScrollButtons();
  initToastSystem();
  initDefaultPanel();
  initTopbarDropdowns();
}

// === Theme Toggle ===
function initThemeToggle() {
  const toggleThemeBtn = document.getElementById("toggleThemeBtn");
  toggleThemeBtn?.addEventListener("click", () => {
    document.documentElement.classList.toggle("theme-light");
    document.documentElement.classList.toggle("theme-dark");
  });
}

// === Panel Tab Switching ===
function initPanelTabs() {
  const panelTabs = document.querySelectorAll(".panel-tab");
  const panelContents = document.querySelectorAll(".panel-content");

  panelTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("data-panel");
      panelContents.forEach(panel => panel.classList.add("hidden"));
      document.getElementById(targetId)?.classList.remove("hidden");
    });
  });
}

// === Bottom Drawer Toggle ===
function initBottomDrawer() {
  const drawer = document.getElementById("btm-drawer");
  const drawerHandle = document.getElementById("btm-drawer-handle");

  drawerHandle?.addEventListener("click", () => {
    drawer.classList.toggle("btm-closed");
    drawer.classList.toggle("btm-open");
  });
}

// === Scroll Buttons ===
function initScrollButtons() {
  const scrollLeftBtn = document.getElementById("btm-scroll-left");
  const scrollRightBtn = document.getElementById("btm-scroll-right");
  const imageContainer = document.getElementById("btm-image-container");

  scrollLeftBtn?.addEventListener("click", () => {
    imageContainer.scrollBy({ left: -200, behavior: "smooth" });
  });

  scrollRightBtn?.addEventListener("click", () => {
    imageContainer.scrollBy({ left: 200, behavior: "smooth" });
  });
}

// === Toast Notifications ===
function initToastSystem() {
  window.showToast = function (message, type = "info") {
    const container = document.getElementById("sp-manga-toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => toast.remove(), 4000);
  };
}

// === Default Panel Activation ===
function initDefaultPanel() {
  document.getElementById("text-panel")?.classList.remove("hidden");
}

// === Topbar Dropdown Logic ===
function initTopbarDropdowns() {
  const menuButtons = document.querySelectorAll(".menu-button");

  menuButtons.forEach(button => {
    button.addEventListener("click", e => {
      e.stopPropagation();
      const parentItem = button.closest(".menu-item");
      const isOpen = parentItem.classList.contains("open");

      document.querySelectorAll(".menu-item.open").forEach(item => item.classList.remove("open"));
      if (!isOpen) parentItem.classList.add("open");
    });
  });

  document.addEventListener("click", e => {
    if (!e.target.closest(".menu-item")) {
      document.querySelectorAll(".menu-item.open").forEach(item => item.classList.remove("open"));
    }
  });
}
