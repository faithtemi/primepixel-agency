// =========================================
// PRIMEPIXEL AGENCY - MAIN JAVASCRIPT
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    // =========================================
    // MOBILE NAVIGATION
    // =========================================

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function (event) {
            event.stopPropagation();

            navLinks.classList.toggle("active");

            const isOpen = navLinks.classList.contains("active");

            menuToggle.setAttribute("aria-expanded", isOpen);

            // Change hamburger to X
            menuToggle.textContent = isOpen ? "✕" : "☰";
        });


        // Close menu when a link is clicked
        const links = navLinks.querySelectorAll("a");

        links.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.textContent = "☰";

                menuToggle.setAttribute("aria-expanded", "false");

            });

        });


        // Close menu when clicking outside
        document.addEventListener("click", function (event) {

            if (
                !navLinks.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                navLinks.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.textContent = "☰";

                menuToggle.setAttribute("aria-expanded", "false");
            }

        });

    }


    // =========================================
    // HEADER SCROLL
    // =========================================

    const header = document.querySelector(".site-header");

    if (header) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 30) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        });

    }


    // =========================================
    // SMOOTH SCROLL
    // =========================================

    const navigationLinks =
        document.querySelectorAll('a[href^="#"]');

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // =========================================
    // BACK TO TOP
    // =========================================

    const topButton =
        document.getElementById("topBtn");

    if (topButton) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 500) {

                topButton.classList.add("show");

            } else {

                topButton.classList.remove("show");

            }

        });


        topButton.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    // =========================================
    // CONTACT FORM
    // =========================================

    const contactForm =
        document.querySelector(".contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name =
                contactForm.querySelector(
                    'input[type="text"]'
                )?.value.trim();

            const email =
                contactForm.querySelector(
                    'input[type="email"]'
                )?.value.trim();

            const inputs =
                contactForm.querySelectorAll(
                    'input[type="text"]'
                );

            const business =
                inputs.length > 1
                    ? inputs[1].value.trim()
                    : "";

            const textarea =
                contactForm.querySelector("textarea");

            const message =
                textarea ? textarea.value.trim() : "";


            if (!name || !email || !message) {

                alert(
                    "Please fill in your name, email and project details."
                );

                return;
            }


            const whatsappMessage =
                `Hello PrimePixel Agency!

Name: ${name}
Email: ${email}
Business: ${business || "Not provided"}

Project:
${message}`;


            const whatsappURL =
                "https://wa.me/2348059617565?text=" +
                encodeURIComponent(whatsappMessage);


            window.open(
                whatsappURL,
                "_blank"
            );

        });

    }


    // =========================================
    // GET A QUOTE
    // =========================================

    const quoteButtons =
        document.querySelectorAll(".quote-btn");

    quoteButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const contact =
                document.getElementById("contact");

            if (contact) {

                contact.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    // =========================================
    // WHATSAPP BUTTON
    // =========================================

    const whatsappButtons =
        document.querySelectorAll(".whatsapp");

    whatsappButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            // Let the normal WhatsApp link work
            return true;

        });

    });


    // =========================================
    // ESC KEY CLOSES MOBILE MENU
    // =========================================

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            if (navLinks && menuToggle) {

                navLinks.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.textContent = "☰";

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }

    });

});
