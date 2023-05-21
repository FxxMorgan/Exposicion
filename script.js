// Función para cambiar de diapositiva
function changeSlide(n) {
    const slides = document.getElementsByClassName('slide');
    let currentSlideIndex = 0;
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('active')) {
            currentSlideIndex = i;
            slides[i].classList.remove('active');
            setTimeout(() => slides[i].style.display = 'none', 1000); // Esperamos a que termine la transición
            break;
        }
    }
    currentSlideIndex = (currentSlideIndex + n + slides.length) % slides.length;
    slides[currentSlideIndex].style.display = 'flex'; // Mostramos la nueva diapositiva
    setTimeout(() => slides[currentSlideIndex].classList.add('active'), 100); // Esperamos a que se muestre antes de empezar la transición
}

// El resto del código JS es igual


// Función para manejar el evento de presionar tecla
function handleKeyPress(event) {
    if (event.keyCode === 37) {
        changeSlide(-1); // Flecha izquierda
    } else if (event.keyCode === 39) {
        changeSlide(1); // Flecha derecha
    }
}

// Función para manejar el evento de clic en flecha
function handleArrowClick(n) {
    changeSlide(n);
}

// Ejecutar las funciones al cargar la página
window.onload = function() {
    document.addEventListener('keydown', handleKeyPress);
    document.getElementById('prev').addEventListener('click', function() {
        handleArrowClick(-1);
    });
    document.getElementById('next').addEventListener('click', function() {
        handleArrowClick(1);
    });
};
