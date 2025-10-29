// Toast Notification System for Inka-CE
window.showToast = function (message, type = "info", duration = 4000) {
  const container = document.getElementById("sp-manga-toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  // Optional: add icon
  const icon = document.createElement("span");
  icon.className = "toast-icon";
  icon.innerHTML = {
    success: "✅",
    error: "❌",
    warning: "⚠️",
    info: "ℹ️"
  }[type] || "🔔";

  toast.prepend(icon);
  container.appendChild(toast);

  // Animate and remove
  setTimeout(() => {
    toast.classList.add("fade-out");
    setTimeout(() => toast.remove(), 500);
  }, duration);
};
