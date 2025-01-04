 // Añadir clase active al hacer clic en el enlace
 document.querySelectorAll('.oval-bar a').forEach(function(link) {
    link.addEventListener('click', function() {
        this.classList.add('active');
        // Eliminar la clase active después de un tiempo (para que la animación termine)
        setTimeout(() => {
            this.classList.remove('active');
        }, 300); // 300ms igual que la duración de la animación
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const titleSpans = document.querySelectorAll('.top-bar .title span');
    
    // Cuando el contenedor es 'hovered', aplicamos el retraso secuencial a cada letra
    document.querySelector('.top-bar .title').addEventListener('mouseenter', () => {
        titleSpans.forEach((span, index) => {
            // Ajustamos el retraso de cada letra para que la animación de la letra anterior termine antes de que comience la siguiente
            span.style.animationDelay = `${index * 0.2}s`; // Retraso secuencial
        });
    });
});

window.addEventListener('load', function() {
    document.querySelector('.loader-container').style.display = 'none';
});


function toggleMenu() {
    const ovalBar = document.querySelector('.oval-bar');
    ovalBar.classList.toggle('show-menu'); // Activa o desactiva el menú desplegable
}
