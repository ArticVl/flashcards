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
const flashcard = document.getElementById('flashcard');


function updateFlashcard() {
    carPosition.textContent = currentIndex + 1;
    carName.textContent = cars[currentIndex];
    carName.classList.add('hidden');
    flashcard.classList.remove('flip');
}

revealButton.addEventListener('click', () => {
    carName.classList.remove('hidden');
    flashcard.classList.add('flip');
});


nextButton.addEventListener('click', () => {
    if (currentIndex < cars.length - 1) {
        currentIndex++;
        updateFlashcard();
    }
});


prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateFlashcard();
    }
});

updateFlashcard();
