// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        Swal.fire({
            text: 'Ha sido enviado correctamente',            
            icon: 'success',
            customClass: {
            popup: 'custom-swal'
            }
        });
        form.reset();
    });
});

