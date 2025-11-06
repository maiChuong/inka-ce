// UI Initialization for Inka-CE

export function initUI() {
  initThemeToggle();
  initPanelTabs();
  initBottomDrawer();
  initScrollButtons();
  initToastSystem();
  initDefaultPanel();
  initTopbarDropdowns();
  initTopbarMobileToggle();
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
  const tabs = document.querySelectorAll(".panel-tab");
  const panels = document.querySelectorAll(".panel-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("data-panel");
      panels.forEach(panel => panel.classList.add("hidden"));
      document.getElementById(targetId)?.classList.remove("hidden");
    });
  });
}

// === Bottom Drawer Toggle ===
function initBottomDrawer() {
  const drawer = document.getElementById("btm-drawer");
  const handle = document.getElementById("btm-drawer-handle");

  handle?.addEventListener("click", () => {
    drawer.classList.toggle("btm-closed");
    drawer.classList.toggle("btm-open");
  });
}

// === Scroll Buttons ===
function initScrollButtons() {
  const leftBtn = document.getElementById("btm-scroll-left");
  const rightBtn = document.getElementById("btm-scroll-right");
  const container = document.getElementById("btm-image-container");

  leftBtn?.addEventListener("click", () => {
    container.scrollBy({ left: -200, behavior: "smooth" });
  });

  rightBtn?.addEventListener("click", () => {
    container.scrollBy({ left: 200, behavior: "smooth" });
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
  const buttons = document.querySelectorAll(".menu-button");

  buttons.forEach(button => {
    button.addEventListener("click", e => {
      e.stopPropagation();
      const item = button.closest(".menu-item");
      const isOpen = item.classList.contains("open");

      document.querySelectorAll(".menu-item.open").forEach(i => i.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
    });
  });

  document.addEventListener("click", e => {
    if (!e.target.closest(".menu-item")) {
      document.querySelectorAll(".menu-item.open").forEach(i => i.classList.remove("open"));
    }
  });
}

// === Mobile Topbar Toggle ===
function initTopbarMobileToggle() {
  const toggleBtn = document.getElementById("topbarToggleBtn");
  const menuWrapper = document.getElementById("topbarMenuWrapper");

  toggleBtn?.addEventListener("click", () => {
    menuWrapper?.classList.toggle("open");
  });
}
