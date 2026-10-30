const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

function closeMenu() {
  menuToggle.classList.remove("active");
  navMenu.classList.remove("show");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
}

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("show");

  menuToggle.classList.toggle("active", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
    closeMenu();
  });
});

// Close the mobile menu when switching back to desktop.
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    closeMenu();
  }
});

// Close the menu with the Escape key.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    menuToggle.focus();
  }
});