// ===============================
// PRIMPIXEL AGENCY - MAIN JAVASCRIPT
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // MOBILE MENU
    // ===============================

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", (e) => {
            e.stopPropagation();

            navMenu.classList.toggle("active");
            menuToggle.classList.toggle("active");

            // Accessibility
            const isOpen = navMenu.classList.contains("active");
            menuToggle.setAttribute("aria-expanded", isOpen);
        });


        // Close menu when a navigation link is clicked
        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                menuToggle.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });


        // Close menu when clicking outside it
        document.addEventListener("click", (e) => {

            if (
                !navMenu.contains(e.target) &&
                !menuToggle.contains(e.target)
            ) {
                navMenu.classList.remove("active");
                menuToggle.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            }

        });

    }


    // ===============================
    // HEADER SCROLL EFFECT
    // ===============================

    const header = document.querySelector("header");

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        });

    }


    // ===============================
    // SMOOTH SCROLLING
    // ===============================

    const smoothLinks = document.querySelectorAll('a[href^="#"]');

    smoothLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // ===============================
    // BACK TO TOP BUTTON
    // ===============================

    const backToTop = document.querySelector(".back-to-top");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 400) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }

        });


        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    // ===============================
    // WHATSAPP BUTTON
    // ===============================

    const whatsappButtons = document.querySelectorAll(
        ".whatsapp-button, .whatsapp-float"
    );

    whatsappButtons.forEach(button => {

        button.addEventListener("click", () => {

            const phoneNumber = "2348059617565";

            const message =
                "Hello PrimePixel Agency! I would like to make an enquiry about your services.";

            const whatsappURL =
                `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

            window.open(whatsappURL, "_blank");

        });

    });


    // ===============================
    // CONTACT FORM
    // ===============================

    const contactForm = document.querySelector("#contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", (e) => {

            e.preventDefault();

            const name =
                contactForm.querySelector('[name="name"]')?.value.trim();

            const email =
                contactForm.querySelector('[name="email"]')?.value.trim();

            const business =
                contactForm.querySelector('[name="business"]')?.value.trim();

            const message =
                contactForm.querySelector('[name="message"]')?.value.trim();


            if (!name || !email || !message) {

                alert("Please fill in your name, email and project details.");

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
                `https://wa.me/2348059617565?text=${encodeURIComponent(whatsappMessage)}`;


            window.open(whatsappURL, "_blank");

        });

    }


    // ===============================
    // GET A QUOTE BUTTONS
    // ===============================

    const quoteButtons = document.querySelectorAll(
        ".quote-btn, .get-quote, .hero-btn"
    );

    quoteButtons.forEach(button => {

        button.addEventListener("click", () => {

            const contactSection =
                document.querySelector("#contact");

            if (contactSection) {

                contactSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    // ===============================
    // VIEW PORTFOLIO BUTTON
    // ===============================

    const portfolioButtons =
        document.querySelectorAll(".portfolio-btn");

    portfolioButtons.forEach(button => {

        button.addEventListener("click", () => {

            const portfolio =
                document.querySelector("#portfolio");

            if (portfolio) {

                portfolio.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    // ===============================
    // SCROLL REVEAL
    // ===============================

   
