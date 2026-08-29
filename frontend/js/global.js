document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".sidebar-overlay");

    if (!menuToggle || !sidebar) {
        return;
    }


    /* Open / close sidebar */

    menuToggle.addEventListener("click", function () {

        sidebar.classList.toggle("is-open");

        if (overlay) {
            overlay.classList.toggle(
                "is-visible",
                sidebar.classList.contains("is-open")
            );
        }

    });


    /* Close sidebar when overlay is clicked */

    if (overlay) {

        overlay.addEventListener("click", function () {

            sidebar.classList.remove("is-open");

            overlay.classList.remove("is-visible");

        });

    }

});