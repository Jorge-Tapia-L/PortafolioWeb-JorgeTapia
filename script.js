document.addEventListener("DOMContentLoaded", () => {

    // ===== LUZ QUE SIGUE AL CURSOR =====
    const spot = document.getElementById("spotlight");
    if (window.matchMedia("(hover: hover)").matches) {
        window.addEventListener("pointermove", (e) => {
            spot.style.setProperty("--x", e.clientX + "px");
            spot.style.setProperty("--y", e.clientY + "px");
        }, { passive: true });
    }

    // ===== LINK ACTIVO EN EL MENÚ LATERAL =====
    const links = document.querySelectorAll(".nav a");
    const sections = [...links]
        .map(a => document.querySelector(a.getAttribute("href")))
        .filter(Boolean);

    const setActive = (id) => {
        links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + id));
    };

    const spy = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: "-30% 0px -60% 0px" });
    sections.forEach(s => spy.observe(s));

    // ===== AÑO DEL FOOTER =====
    document.getElementById("year").textContent = new Date().getFullYear();
});
