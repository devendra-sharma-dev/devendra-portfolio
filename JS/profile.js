// =========================================================
// PROFILE SECTION REVEAL
// =========================================================

const profileSection =
    document.querySelector(
        "#profile"
    );


if (profileSection) {

    const profileObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        profileSection.classList.add(
                            "section-visible"
                        );

                    }

                });

            },
            {
                threshold: 0.35
            }
        );


    profileObserver.observe(
        profileSection
    );

}