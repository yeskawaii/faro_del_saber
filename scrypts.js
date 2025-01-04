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