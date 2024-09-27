const cars = [
    "Bugatti Chiron Super Sport 300+",
    "Hennessey Venom F5",
    "Koenigsegg Jesko Absolut",
    "SSC Tuatara",
    "Rimac Nevera"
];

let currentIndex = 0;

const carPosition = document.getElementById('carPosition');
const carName = document.getElementById('carName');
const revealButton = document.getElementById('reveal');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Função para atualizar o flashcard
function updateFlashcard() {
    carPosition.textContent = currentIndex + 1;
    carName.textContent = cars[currentIndex];
    carName.classList.add('hidden');
}

// Função para revelar o carro
revealButton.addEventListener('click', () => {
    carName.classList.remove('hidden');
});

// Botão para o próximo carro
nextButton.addEventListener('click', () => {
    if (currentIndex < cars.length - 1) {
        currentIndex++;
        updateFlashcard();
    }
});

// Botão para o carro anterior
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateFlashcard();
    }
});

// Inicializar o flashcard com o primeiro carro
updateFlashcard();
