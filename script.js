document.addEventListener("DOMContentLoaded", () => {

    // ===== HEADER AL HACER SCROLL =====
    const header = document.getElementById("header");
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // ===== MENÚ MÓVIL =====
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("nav");

    const setMenu = (open) => {
        nav.classList.toggle("open", open);
        header.classList.toggle("menu-open", open);
        toggle.setAttribute("aria-expanded", String(open));
        toggle.innerHTML = open
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    };

    toggle.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));

    // ===== ANIMACIÓN AL APARECER =====
    const reveals = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add("visible");
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
        reveals.forEach(el => io.observe(el));
    } else {
        reveals.forEach(el => el.classList.add("visible"));
    }

    // ===== LINK ACTIVO EN EL MENÚ =====
    const links = nav.querySelectorAll("a[href^='#']");
    const sections = [...links]
        .map(a => document.querySelector(a.getAttribute("href")))
        .filter(Boolean);

    const spy = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                links.forEach(a =>
                    a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id)
                );
            }
        });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(s => spy.observe(s));

    // ===== TABS EDUCACIÓN / EXPERIENCIA =====
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => {
                const active = t === tab;
                t.classList.toggle("active", active);
                t.setAttribute("aria-selected", String(active));
                document.getElementById(t.getAttribute("aria-controls"))
                    .classList.toggle("active", active);
            });
        });
    });

    // ===== AÑO DEL FOOTER =====
    document.getElementById("year").textContent = new Date().getFullYear();
});
