// =========================================================
// CURSOR GLOW
// =========================================================

const cursorGlow =
    document.createElement("div");

cursorGlow.className =
    "cursor-glow";

document.body.appendChild(
    cursorGlow
);


// =========================================================
// ELEMENTS
// =========================================================

const heroTitle =
    document.querySelector(
        ".hero-title"
    );

const heroMetadata =
    document.querySelector(
        ".hero-metadata"
    );

const grid =
    document.querySelector(
        ".grid"
    );


// =========================================================
// MOUSE STATE
// =========================================================

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;


// =========================================================
// MOUSE MOVEMENT
// =========================================================

document.addEventListener(
    "mousemove",
    (event) => {

        mouseX =
            (event.clientX /
                window.innerWidth) - 0.5;

        mouseY =
            (event.clientY /
                window.innerHeight) - 0.5;


        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

    }
);


// =========================================================
// PARALLAX ANIMATION
// =========================================================

function animateParallax() {

    currentX +=
        (mouseX - currentX) * 0.05;

    currentY +=
        (mouseY - currentY) * 0.05;


    // -----------------------------------------
    // HERO TITLE
    // -----------------------------------------

    if (heroTitle) {

        heroTitle.style.setProperty(
            "--mouse-x",
            `${currentX * 12}px`
        );

        heroTitle.style.setProperty(
            "--mouse-y",
            `${currentY * 8}px`
        );

    }


    // -----------------------------------------
    // METADATA
    // -----------------------------------------

    if (heroMetadata) {

        heroMetadata.style.setProperty(
            "--mouse-x",
            `${currentX * -18}px`
        );

        heroMetadata.style.setProperty(
            "--mouse-y",
            `${currentY * -10}px`
        );

    }


    // -----------------------------------------
    // BACKGROUND GRID
    // -----------------------------------------

    if (grid) {

        grid.style.setProperty(
            "--grid-x",
            `${currentX * 12}px`
        );

        grid.style.setProperty(
            "--grid-y",
            `${currentY * 12}px`
        );

    }


    requestAnimationFrame(
        animateParallax
    );

}


animateParallax();