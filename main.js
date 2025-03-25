document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");
  const closeMenu = document.querySelector(".close-menu"); // Yeni kapatma butonu
  const body = document.body;

  function toggleMobileMenu() {
    mobileMenu.classList.toggle("active");
    mobileMenuOverlay.classList.toggle("active");
    body.classList.toggle("menu-open");
  }

  if (hamburger) {
    hamburger.addEventListener("click", toggleMobileMenu);
  }

  if (closeMenu) {
    closeMenu.addEventListener("click", toggleMobileMenu);
  }

  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener("click", toggleMobileMenu);
  }
});
