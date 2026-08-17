// =========================================================
// NAVIGATION ELEMENTS
// =========================================================

const sections = document.querySelectorAll(".page-section");
const navLinks = document.querySelectorAll(".nav-link");
const navLogo = document.querySelector(".nav-logo");


// =========================================================
// ACTIVE NAVIGATION
// =========================================================

function updateActiveNavigation() {

    const scrollPosition =
        window.scrollY + (window.innerHeight * 0.35);

    let activeSection = "home";


    sections.forEach((section) => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;


        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionBottom
        ) {
            activeSection = section.id;
        }

    });


    navLinks.forEach((link) => {

        const sectionName =
            link.getAttribute("data-section");

        link.classList.toggle(
            "active",
            sectionName === activeSection
        );

    });

}


// =========================================================
// NAVIGATION CLICK
// =========================================================

navLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        const targetId =
            link.getAttribute("data-section");

        const targetSection =
            document.getElementById(targetId);


        if (!targetSection) {
            return;
        }


        const navbarHeight =
            document.querySelector(".navbar").offsetHeight;


        const targetPosition =
            targetSection.offsetTop - navbarHeight;


        window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

        });

    });

});


// =========================================================
// LOGO → HOME
// =========================================================

if (navLogo) {

    navLogo.addEventListener("click", (event) => {

        event.preventDefault();

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


// =========================================================
// SCROLL
// =========================================================

window.addEventListener(
    "scroll",
    updateActiveNavigation,
    { passive: true }
);


// =========================================================
// RESIZE
// =========================================================

window.addEventListener(
    "resize",
    updateActiveNavigation
);


// =========================================================
// INITIALIZE
// =========================================================

updateActiveNavigation();