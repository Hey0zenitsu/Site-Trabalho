// Ajusta o índice dos slides
let slideIndex = 0;

function plusDivs(n) {
    const slides = document.querySelectorAll('.slides');
    slideIndex += n;

    // Corrige o índice se ultrapassar o número de slides
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    } else if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    updateSlides();
}

function updateSlides() {
    const slides = document.querySelectorAll('.slides');
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'flex' : 'none';
    });
}

// Inicializa os slides
updateSlides();
