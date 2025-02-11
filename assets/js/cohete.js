document.addEventListener("DOMContentLoaded", function () {
    let botonArriba = document.querySelector(".ir-arriba");

    // Mostrar botón cuando se haga scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            botonArriba.style.display = "block";
        } else {
            botonArriba.style.display = "none";
        }
    });

    // Efecto fuego al hacer clic
    botonArriba.addEventListener("click", function () {
        this.classList.toggle("fuego");
        setTimeout(() => this.classList.remove("fuego"), 600);
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});