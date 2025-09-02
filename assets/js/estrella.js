let animacion = null;

function dibujarGuitarraEpica() {
    const canvas = document.getElementById("miCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Crear estrellas
    const estrellas = [];
    for (let i = 0; i < 200; i++) {
        estrellas.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: Math.random() * 1.5, alpha: Math.random() });
    }

    let angulo = 0;

    animacion = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Fondo espacio
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        estrellas.forEach(e => {
            ctx.fillStyle = `rgba(255,255,255,${e.alpha})`;
            ctx.beginPath();
            ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
            ctx.fill();
        });

        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2 + 30);
        ctx.rotate(Math.sin(angulo) * 0.05);

        // --- Cuerpo guitarra ---
        const grad = ctx.createLinearGradient(-40, -60, 40, 60);
        grad.addColorStop(0, "#ff4d4d");
        grad.addColorStop(0.5, "#ff0000");
        grad.addColorStop(1, "#660000");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(-40, 0);
        ctx.quadraticCurveTo(-20, -60, 0, -50);
        ctx.quadraticCurveTo(20, -60, 40, 0);
        ctx.quadraticCurveTo(20, 60, 0, 50);
        ctx.quadraticCurveTo(-20, 60, -40, 0);
        ctx.fill();

        // --- Agujero central ---
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(0, 0, 10, 0, Math.PI * 2);
        ctx.fill();

        // --- Mástil ---
        ctx.fillStyle = "#222";
        ctx.fillRect(-5, -50, 10, -100);

        // --- Cabeza ---
        ctx.fillStyle = "#444";
        ctx.fillRect(-14, -150, 28, 15);

        // --- Cuerdas ---
        ctx.strokeStyle = "silver";
        ctx.lineWidth = 1;
        for (let i = -3; i <= 3; i++) {
            ctx.beginPath();
            ctx.moveTo(i * 3, -50);
            ctx.lineTo(i * 3, 50);
            ctx.stroke();
        }

        ctx.restore();
        angulo += 0.05;
    }, 30);
}

function limpiarCanvas() {
    const canvas = document.getElementById("miCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (animacion) {
        clearInterval(animacion);
        animacion = null;
    }
}
