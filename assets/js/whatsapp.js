const toggleBtn = document.getElementById('whatsapp-toggle-btn');
const widget = document.getElementById('whatsapp-widget');
const closeBtn = document.getElementById('whatsapp-close');
const messagesContainer = document.getElementById('whatsapp-messages');
const form = document.getElementById('whatsapp-form');
const input = document.getElementById('whatsapp-input');

// Mostrar u ocultar widget
toggleBtn.addEventListener('click', () => {
  widget.style.display = 'flex';
  toggleBtn.style.display = 'none';

  // Mostrar mensaje de bienvenida si aún no existe
  const existingGreeting = document.querySelector('.message.bot');
  if (!existingGreeting) {
    addMessage("Hola 👋, ¿En qué puedo ayudarte?", 'bot');
  }
});


closeBtn.addEventListener('click', () => {
  widget.style.display = 'none';
  toggleBtn.style.display = 'flex';
});

// Añadir mensaje al chat
function addMessage(text, sender) {
  const msg = document.createElement('div');
  msg.classList.add('message');
  msg.classList.add(sender);
  msg.textContent = text;
  messagesContainer.appendChild(msg);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Enviar mensaje
form.addEventListener('submit', e => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  addMessage(text, 'user');
  input.value = '';
  // Abrir WhatsApp con mensaje codificado
  const waUrl = `https://wa.me/56979347247?text=${encodeURIComponent(text)}`;
  window.open(waUrl, '_blank');
});