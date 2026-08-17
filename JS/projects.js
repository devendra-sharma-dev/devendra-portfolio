// =========================================================
// PROJECTS
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    // -----------------------------------------------------
    // PROJECT DATA
    // -----------------------------------------------------

    const projects = {

        appointment: {
            category: "SALESFORCE APPLICATION",

            title: "Appointment Management",

            description:
                "An end-to-end appointment management system built on Salesforce, allowing users to manage the complete appointment lifecycle through a custom digital experience.",

            tech: [
                "SALESFORCE",
                "EXPERIENCE CLOUD",
                "LWC",
                "APEX",
                "FLOWS"
            ],

            number: "01 / 04",

            visual: "appointment"
        },


        sms: {
            category: "COMMUNICATION PLATFORM",

            title: "360 SMS",

            description:
                "A multi-channel communication application built inside Salesforce, bringing messaging capabilities into a unified custom interface for managing customer conversations.",

            tech: [
                "LWC",
                "APEX",
                "APIs",
                "TWILIO",
                "META",
                "INSTAGRAM",
                "LINE"
            ],

            number: "02 / 04",

            visual: "sms"
        },


        commerce: {
            category: "B2B COMMERCE",

            title: "Luxury Commerce",

            description:
                "A custom B2B Commerce website built for a luxury watch business, including tailored product experiences and a single-page checkout experience.",

            tech: [
                "B2B COMMERCE CLOUD",
                "LWC",
                "APEX",
                "FLOWS",
                "JAVASCRIPT"
            ],

            number: "03 / 04",

            visual: "commerce"
        },


        travel: {
            category: "EXPERIENCE CLOUD",

            title: "Travel Experience",

            description:
                "A custom Experience Cloud website developed for a major Indian aviation group, delivering a tailored digital experience while keeping the client identity confidential.",

            tech: [
                "EXPERIENCE CLOUD",
                "LWC",
                "APEX",
                "SALES CLOUD",
                "CUSTOM APPLICATION"
            ],

            number: "04 / 04",

            visual: "travel"
        }

    };


    // -----------------------------------------------------
    // ELEMENTS
    // -----------------------------------------------------

    const buttons =
        document.querySelectorAll(
            ".project-index-item"
        );


    const category =
        document.getElementById(
            "project-category"
        );


    const footerNumber =
        document.getElementById(
            "project-footer-number"
        );


    const title =
        document.getElementById(
            "project-title"
        );


    const description =
        document.getElementById(
            "project-description"
        );


    const tech =
        document.getElementById(
            "project-tech"
        );


    const visual =
        document.getElementById(
            "project-visual"
        );


    // -----------------------------------------------------
    // SAFETY CHECK
    // -----------------------------------------------------

    if (!buttons.length) {

        console.error(
            "Projects: No project buttons found."
        );

        return;
    }


    if (
        !category ||
        !footerNumber ||
        !title ||
        !description ||
        !tech ||
        !visual
    ) {

        console.error(
            "Projects: One or more project elements are missing."
        );

        return;
    }


    // -----------------------------------------------------
    // PROJECT VISUAL
    // -----------------------------------------------------

    function getProjectVisual(type) {

        switch (type) {

            // ---------------------------------------------
            // APPOINTMENT
            // ---------------------------------------------

            case "appointment":

                return `
                    <div class="project-graphic graphic-appointment">

                        <div class="appointment-node">
                            REQUEST
                        </div>

                        <div class="graphic-line"></div>

                        <div class="appointment-node">
                            SCHEDULE
                        </div>

                        <div class="graphic-line"></div>

                        <div class="appointment-node accent-node">
                            COMPLETE
                        </div>

                    </div>
                `;


            // ---------------------------------------------
            // 360 SMS
            // ---------------------------------------------

            case "sms":

                return `
                    <div class="project-graphic graphic-network">

                        <div class="network-node network-meta">
                            META
                        </div>

                        <div class="network-center">
                            360
                        </div>

                        <div class="network-node network-twilio">
                            TWILIO
                        </div>

                        <div class="network-node network-instagram">
                            INSTAGRAM
                        </div>

                        <div class="network-node network-line">
                            LINE
                        </div>

                    </div>
                `;


            // ---------------------------------------------
            // COMMERCE
            // ---------------------------------------------

            case "commerce":

                return `
                    <div class="project-graphic graphic-commerce">

                        <div class="commerce-step">
                            PRODUCT
                        </div>

                        <div class="commerce-arrow">
                            ↓
                        </div>

                        <div class="commerce-step">
                            PDP
                        </div>

                        <div class="commerce-arrow">
                            ↓
                        </div>

                        <div class="commerce-step">
                            CHECKOUT
                        </div>

                    </div>
                `;


            // ---------------------------------------------
            // TRAVEL
            // ---------------------------------------------

            case "travel":

                return `
                    <div class="project-graphic graphic-travel">

                        <div class="travel-core">
                            EXPERIENCE
                        </div>

                        <div class="travel-node travel-one">
                            WEB
                        </div>

                        <div class="travel-node travel-two">
                            CRM
                        </div>

                        <div class="travel-node travel-three">
                            DATA
                        </div>

                    </div>
                `;


            // ---------------------------------------------
            // DEFAULT
            // ---------------------------------------------

            default:

                return "";
        }
    }


    // -----------------------------------------------------
    // CHANGE PROJECT
    // -----------------------------------------------------

    function changeProject(projectId) {

        const project =
            projects[projectId];


        if (!project) {

            console.error(
                "Projects: Unknown project:",
                projectId
            );

            return;
        }


        // ---------------------------------------------
        // EXIT ANIMATION
        // ---------------------------------------------

        category.style.opacity = "0";

        footerNumber.style.opacity = "0";

        title.style.opacity = "0";

        description.style.opacity = "0";

        tech.style.opacity = "0";

        visual.style.opacity = "0";


        category.style.transform =
            "translateY(12px)";

        footerNumber.style.transform =
            "translateY(12px)";

        title.style.transform =
            "translateY(12px)";

        description.style.transform =
            "translateY(12px)";

        tech.style.transform =
            "translateY(12px)";


        // ---------------------------------------------
        // UPDATE CONTENT
        // ---------------------------------------------

        setTimeout(() => {

            category.textContent =
                project.category;


            footerNumber.textContent =
                project.number;


            title.textContent =
                project.title;


            description.textContent =
                project.description;


            // -----------------------------------------
            // UPDATE TECHNOLOGY
            // -----------------------------------------

            tech.innerHTML =
                project.tech
                    .map(
                        item =>
                            `<span>${item}</span>`
                    )
                    .join("");


            // -----------------------------------------
            // UPDATE VISUAL
            // -----------------------------------------

            visual.innerHTML =
                getProjectVisual(
                    project.visual
                );


            // -----------------------------------------
            // ENTER ANIMATION
            // -----------------------------------------

            requestAnimationFrame(() => {

                category.style.opacity = "1";

                footerNumber.style.opacity = "1";

                title.style.opacity = "1";

                description.style.opacity = "1";

                tech.style.opacity = "1";

                visual.style.opacity = "0.8";


                category.style.transform =
                    "translateY(0)";

                footerNumber.style.transform =
                    "translateY(0)";

                title.style.transform =
                    "translateY(0)";

                description.style.transform =
                    "translateY(0)";

                tech.style.transform =
                    "translateY(0)";

            });

        }, 200);

    }


    // -----------------------------------------------------
    // BUTTON EVENTS
    // -----------------------------------------------------

    buttons.forEach((button) => {

        button.addEventListener(
            "click",
            (event) => {

                event.preventDefault();


                const projectId =
                    button.dataset.project;


                console.log(
                    "Project clicked:",
                    projectId
                );


                // -----------------------------------------
                // ACTIVE BUTTON
                // -----------------------------------------

                buttons.forEach((item) => {

                    item.classList.remove(
                        "active"
                    );

                });


                button.classList.add(
                    "active"
                );


                // -----------------------------------------
                // CHANGE PROJECT
                // -----------------------------------------

                changeProject(
                    projectId
                );

            }
        );

    });


    // -----------------------------------------------------
    // INITIAL PROJECT
    // -----------------------------------------------------

    changeProject("appointment");

});