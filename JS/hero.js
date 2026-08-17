// =========================================================
// HERO ANIMATION SYSTEM
// =========================================================

const heroElements = {

    status:
        document.querySelector(".status"),

    title:
        document.querySelector(".hero-title"),

    divider:
        document.querySelector(".divider"),

    role:
        document.querySelector(".hero-role"),

    indicator:
        document.querySelector(".indicator")

};


// =========================================================
// INITIAL STATE
// =========================================================

Object.values(heroElements).forEach((element) => {

    if (element) {
        element.classList.add("hero-hidden");
    }

});


// =========================================================
// REVEAL FUNCTION
// =========================================================

function revealHeroElement(element) {

    if (!element) {
        return;
    }

    element.classList.remove(
        "hero-hidden"
    );

    element.classList.add(
        "hero-visible"
    );

}


// =========================================================
// HERO SEQUENCE
// =========================================================

window.addEventListener("load", () => {

    setTimeout(() => {

        revealHeroElement(
            heroElements.status
        );

    }, 700);


    setTimeout(() => {

        revealHeroElement(
            heroElements.title
        );

    }, 1500);


    setTimeout(() => {

        revealHeroElement(
            heroElements.divider
        );

    }, 2500);


    setTimeout(() => {

        revealHeroElement(
            heroElements.role
        );

    }, 3000);


    setTimeout(() => {

        revealHeroElement(
            heroElements.indicator
        );

    }, 3600);

});