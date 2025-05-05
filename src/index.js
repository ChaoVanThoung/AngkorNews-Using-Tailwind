console.log("Ploin");

// Function to toggle dark mode
function toggleDarkMode() {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("darkMode", "light");
    updateDarkModeIcon(false);
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("darkMode", "dark");
    updateDarkModeIcon(true);
  }
}

// Function to update the dark mode toggle icon
function updateDarkModeIcon(isDarkMode) {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  if (darkModeToggle) {
    if (isDarkMode) {
      darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
      darkModeToggle.setAttribute("title", "Switch to light mode");
    } else {
      darkModeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
      darkModeToggle.setAttribute("title", "Switch to dark mode");
    }
  }
}

// Function to initialize dark mode based on user preference
function initDarkMode() {
  const darkMode = localStorage.getItem("darkMode");

  if (darkMode === "dark") {
    document.documentElement.classList.add("dark");
    updateDarkModeIcon(true);
  } else if (darkMode === "light") {
    document.documentElement.classList.remove("dark");
    updateDarkModeIcon(false);
  } else {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      updateDarkModeIcon(true);
    } else {
      updateDarkModeIcon(false);
    }
  }

  const darkModeToggle = document.getElementById("dark-mode-toggle");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", toggleDarkMode);
  }
}

// Function to handle mobile menu toggle
function setupMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
}

// Initialize everything when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded");
  setupMobileMenu();
  initDarkMode();
});