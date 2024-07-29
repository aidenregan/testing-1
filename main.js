const glassyButtons = document.querySelectorAll(".glassy-button");
const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
      ? navToggle.setAttribute("aria-expanded", false)
      : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

glassyButtons.forEach( (button) => {
  button.addEventListener("mousemove", (event) =>  {
    const centerX = button.offsetWidth / 2;
    const centerY = button.offsetHeight / 2;

    const offsetX = event.offsetX - centerX;
    const offsetY = event.offsetY - centerY;

    button.style.setProperty("--_x-motion", `${offsetX}px`);
    button.style.setProperty("--_y-motion", `${offsetY}px`);
  })
} );


