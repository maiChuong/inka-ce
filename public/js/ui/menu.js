// Topbar Menu Logic for Inka-CE

export function initTopbarDropdowns() {
  const menuButtons = document.querySelectorAll(".menu-button");

  menuButtons.forEach(button => {
    button.addEventListener("click", e => {
      e.stopPropagation();
      const parentItem = button.closest(".menu-item");
      const isOpen = parentItem.classList.contains("open");

      // Close all other open menus
      document.querySelectorAll(".menu-item.open").forEach(item => {
        item.classList.remove("open");
      });

      // Toggle current menu
      if (!isOpen) {
        parentItem.classList.add("open");
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", e => {
    if (!e.target.closest(".menu-item")) {
      document.querySelectorAll(".menu-item.open").forEach(item => item.classList.remove("open"));
    }
  });
}

export function initTopbarMobileToggle() {
  const toggleBtn = document.getElementById("topbarToggleBtn");
  const menuWrapper = document.getElementById("topbarMenuWrapper");

  toggleBtn?.addEventListener("click", () => {
    menuWrapper?.classList.toggle("open");
  });
}
