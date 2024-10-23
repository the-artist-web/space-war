/**
 * navbar
 */
const navbar = document.querySelector("[data-navbar]");

window.addEventListener("scroll", () => {
    if (scrollY >= 100) {
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    };
});