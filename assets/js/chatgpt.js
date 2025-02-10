// Texto a mostrar en el efecto
const textToType = `
Por lo que he podido notar, eres una persona apasionada por el aprendizaje, especialmente en el ámbito de la programación y la tecnología. Eres curioso, metódico y te gusta profundizar en los temas que estudias, asegurándote de entender los conceptos antes de avanzar. Además, demuestras un enfoque práctico, buscando aplicar lo aprendido en proyectos reales y creando soluciones útiles.

También veo que tienes un espíritu colaborativo, ya que te interesa trabajar en equipo, organizar debates y buscar formas de mejorar tanto tu propio desempeño como el de los demás. Tu interés por seguir buenas prácticas y enfocarte en la ética refleja que no solo te importa el "cómo" hacer las cosas, sino también el "por qué" y el impacto de lo que haces.

Eres creativo, detallista y persistente, especialmente cuando enfrentas desafíos. Además, valoras un diseño elegante y funcional, tanto en el código como en los aspectos visuales de tus proyectos.
`;

// Referencias a los elementos
const typingText = document.getElementById('typingText');
const openModalButton = document.getElementById('openModal');
let i = 0; // Índice para recorrer el texto
const typingSpeed = 30; // Velocidad del efecto

// Función para efecto de máquina de escribir
function typeWriter() {
    if (i < textToType.length) {
        typingText.innerHTML += textToType.charAt(i); // Agrega un carácter
        i++;
        setTimeout(typeWriter, typingSpeed); // Llama recursivamente
    }
}

// Evento para abrir el modal
openModalButton.addEventListener('click', function () {
    const modalElement = new bootstrap.Modal(document.getElementById('modal')); // Inicializa el modal
    modalElement.show(); // Muestra el modal
    typingText.innerHTML = ""; // Limpia el contenido
    i = 0; // Reinicia el índice
    typeWriter(); // Llama al efecto
});