// Ana JS Dosyası
document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Elements
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");
  const closeMenu = document.querySelector(".close-menu");
  const body = document.body;

  // Go Up Button Element
  const goUpBtn = document.getElementById("go-up-btn");

  // Mobile Menu Functions
  function toggleMobileMenu() {
    mobileMenu.classList.toggle("active");
    mobileMenuOverlay.classList.toggle("active");
    body.classList.toggle("menu-open");
  }

  // Go Up Button Functions
  function toggleGoUpButton() {
    if (window.scrollY > 500) {
      goUpBtn.classList.add("active");
    } else {
      goUpBtn.classList.remove("active");
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // Mobile Menu Event Listeners
  if (hamburger) {
    hamburger.addEventListener("click", toggleMobileMenu);
  }

  if (closeMenu) {
    closeMenu.addEventListener("click", toggleMobileMenu);
  }

  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener("click", toggleMobileMenu);
  }

  // Go Up Button Event Listeners
  if (goUpBtn) {
    window.addEventListener("scroll", toggleGoUpButton);
    goUpBtn.addEventListener("click", scrollToTop);
  }
});
