window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const navbarHeight = navbar.clientHeight;
    const offset = window.pageYOffset;

    if (offset > navbarHeight) {
        navbar.classList.add("sticky", "scrolled");
    } else {
        navbar.classList.remove("sticky", "scrolled");
    }

    // if (navbarCollapse.classList.contains("active")) {
    //     navbarCollapse.style.height = "100%";
    // }
});

// Navbar Mobile
const navbarToggler = document.querySelector(".navbar-toggler");

navbarToggler.addEventListener("click", function () {
    document.querySelector(".navbar-collapse").classList.toggle("active");
});
