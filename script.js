document.addEventListener("DOMContentLoaded", function () {
    //1. SMOOTH SCROLL NAVIGATION
    const navLinks = document.querySelectorAll('.navbar-menu a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");
            if (targetId === "#") {
                return;
            }
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                event.preventDefault();
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
    // 2. NAVBAR EFFECT SAAT SCROLL
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
    }
    // 3. ORDER BUTTON
    const orderButtons = document.querySelectorAll(
        ".navbar-order, .menu-bottom a, .hero-buttons .btn-primary"
    );
    orderButtons.forEach(button => {
        button.addEventListener("click", function () {
            const contactSection = document.querySelector("#contact");
            if (contactSection) {
                const confirmOrder = confirm(
                    "Ingin melakukan pemesanan di Brew Haven Coffee?"
                );
                if (confirmOrder) {
                    contactSection.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });
        //4. VIEW FULL MENU
    const viewMenuButton = document.querySelector(".view-menu");
    if (viewMenuButton) {
        viewMenuButton.addEventListener("click", function (event) {
            event.preventDefault();
            alert(
                "Menu lengkap Brew Haven Coffee akan segera tersedia ☕"
            );
        });
    }
    // 5. SCROLL REVEAL ANIMATION
    const animatedElements = document.querySelectorAll(
        ".menu-card, .about-feature, .feature-item, .testimonial-card, .gallery-main, .gallery-side img"
    );
    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );
    animatedElements.forEach(element => {
        element.classList.add("reveal");
        observer.observe(element);
    });
    // 6. CONSOLE TEST
    console.log("Brew Haven Coffee website berhasil dimuat ☕");

});