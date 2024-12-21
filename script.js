const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;
const imageWidth = images[0].offsetWidth + parseInt(getComputedStyle(images[0]).marginRight) * 2;

// Atualiza o slider com base no índice atual
function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

// Botão anterior
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

// Botão próximo
nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

// Inicializa o slider na posição correta
updateSlider();
