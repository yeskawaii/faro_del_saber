// Variables globales
let images = [
    './img/foto 1.jpg',
    './img/foto 2.png',
    './img/foto 3.png',
    './img/foto 4.jpg'
];

let currentIndex = 0;

const currentImageElement = document.getElementById('current-img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Función para actualizar la imagen central
function updateImage() {
    currentImageElement.src = images[currentIndex];
}

document.querySelectorAll('.oval-bar a').forEach(function(link) {
    link.addEventListener('click', function() {
        this.classList.add('active');
        // Eliminar la clase active después de un tiempo (para que la animación termine)
        setTimeout(() => {
            this.classList.remove('active');
        }, 300); // 300ms igual que la duración de la animación
    });
});

window.addEventListener('load', function() {
    document.querySelector('.loader-container').style.display = 'none';
});


function toggleMenu() {
    const ovalBar = document.querySelector('.oval-bar');
    ovalBar.classList.toggle('show-menu'); // Activa o desactiva el menú desplegable
}

// Función para aplicar la rotación a las manos
function rotateHand(button, direction) {
    if (direction === 'left') {
        button.classList.add('rotate-left');
    } else if (direction === 'right') {
        button.classList.add('rotate-right');
    }

    // Eliminar la clase de rotación después de un tiempo
    setTimeout(() => {
        button.classList.remove('rotate-left', 'rotate-right');
    }, 500); // Duración de la animación (500ms)
}

// Mover al anterior y rotar la mano izquierda
function moveToPrevious() {
    rotateHand(prevButton, 'left'); // Rotar hacia la izquierda
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Ajustar el índice
    updateImage(); // Actualizar la imagen central
}

// Mover al siguiente y rotar la mano derecha
function moveToNext() {
    rotateHand(nextButton, 'right'); // Rotar hacia la derecha
    currentIndex = (currentIndex + 1) % images.length; // Ajustar el índice
    updateImage(); // Actualizar la imagen central
}

document.addEventListener("DOMContentLoaded", function () {
    // Eventos para los botones
    prevButton.addEventListener('click', moveToPrevious);
    nextButton.addEventListener('click', moveToNext);

    // Eventos para las teclas del teclado
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            moveToPrevious(); // Flecha izquierda
        } else if (event.key === 'ArrowRight') {
            moveToNext(); // Flecha derecha
        }
    });

    // Ocultar el loader después de cargar la página
    window.addEventListener('load', function () {
        document.querySelector('.loader-container').style.display = 'none';
    });

    // Animación para los enlaces en la barra ovalada
    document.querySelectorAll('.oval-bar a').forEach(function (link) {
        link.addEventListener('click', function () {
            this.classList.add('active');
            setTimeout(() => {
                this.classList.remove('active');
            }, 300); // 300ms igual que la duración de la animación
        });
    });

    // Animación de título en el encabezado
    const titleSpans = document.querySelectorAll('.top-bar .title span');
    document.querySelector('.top-bar .title').addEventListener('mouseenter', () => {
        titleSpans.forEach((span, index) => {
            span.style.animationDelay = `${index * 0.2}s`; // Retraso secuencial
        });
    });
});
