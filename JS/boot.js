const bootScreen = document.querySelector(".boot-screen");

window.addEventListener("load", () => {

    setTimeout(() => {

        bootScreen.classList.add("boot-complete");

    }, 1300);

});