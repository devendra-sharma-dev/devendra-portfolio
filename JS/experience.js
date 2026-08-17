// =========================================================
// EXPERIENCE ANIMATION
// =========================================================

const experienceSection =
    document.querySelector(
        "#experience"
    );

const experienceItems =
    document.querySelectorAll(
        ".experience-item"
    );

const timelineProgress =
    document.querySelector(
        ".timeline-progress"
    );


if (experienceSection) {

    const experienceObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        experienceSection
                            .classList
                            .add(
                                "section-visible"
                            );


                        experienceItems.forEach(
                            (item, index) => {

                                setTimeout(() => {

                                    item.classList.add(
                                        "experience-visible"
                                    );

                                }, index * 350);

                            }
                        );


                        if (timelineProgress) {

                            timelineProgress.style.height =
                                "100%";

                        }

                    }

                });

            },
            {
                threshold: 0.2
            }
        );


    experienceObserver.observe(
        experienceSection
    );

}