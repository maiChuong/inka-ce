// Bottom Drawer Preview Logic for Inka-CE

export function initBottomDrawer() {
  const drawer = document.getElementById("btm-drawer");
  const handle = document.getElementById("btm-drawer-handle");

  handle?.addEventListener("click", () => {
    drawer.classList.toggle("btm-open");
  });
}

export function initScrollButtons() {
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
