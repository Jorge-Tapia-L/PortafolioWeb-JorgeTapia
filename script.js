document.addEventListener("DOMContentLoaded", () => {

// SCROLL
const sections = document.querySelectorAll("section");

function mostrar() {
sections.forEach(sec => {
const top = sec.getBoundingClientRect().top;
if (top < window.innerHeight - 100) {
sec.classList.add("visible");
}
});
}

window.addEventListener("scroll", mostrar);
mostrar();


// TOGGLE CV
const btnEdu = document.getElementById("btnEdu");
const btnExp = document.getElementById("btnExp");

const educacion = document.getElementById("educacion");
const experiencia = document.getElementById("experiencia");

// estado inicial
educacion.style.display = "block";
experiencia.style.display = "none";

btnEdu.addEventListener("click", () => {

    educacion.style.display = "block";
    experiencia.style.display = "none";

    btnEdu.classList.add("active");
    btnExp.classList.remove("active");

});

btnExp.addEventListener("click", () => {

    educacion.style.display = "none";
    experiencia.style.display = "block";

    btnExp.classList.add("active");
    btnEdu.classList.remove("active");

});

});