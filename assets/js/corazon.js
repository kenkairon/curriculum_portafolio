document.addEventListener("DOMContentLoaded", () => {
    const heartIcon = document.getElementById("heart-icon");

    // Función para activar el latido cuando se hace scroll
    window.addEventListener("scroll", () => {
        // Añadir la clase 'liked' para iniciar el latido
        heartIcon.classList.add("liked");

        // Detener el latido después de 2 segundos
        setTimeout(() => {
            heartIcon.classList.remove("liked");
        }, 2000); // Ajusta el tiempo en milisegundos si es necesario
    });
});
