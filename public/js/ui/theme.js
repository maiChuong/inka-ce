// Theme Toggle Logic for Inka-CE

export function initThemeToggle() {
  const toggleThemeBtn = document.getElementById("toggleThemeBtn");

  toggleThemeBtn?.addEventListener("click", () => {
    const html = document.documentElement;

    if (html.classList.contains("theme-light")) {
      html.classList.remove("theme-light");
      html.classList.add("theme-dark");
    } else {
      html.classList.remove("theme-dark");
      html.classList.add("theme-light");
    }
  });
}
