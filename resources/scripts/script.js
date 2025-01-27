// Varibles
const backButton = document.getElementById('back');
const nextButton = document.getElementById('next');
const slideNum = document.getElementById('slide-num');
const slideshowContainer = document.getElementById('slideshow-container');
const nameInput = document.getElementById('name');
const bio = document.getElementById('bio');
const slideshowElements = slideshowContainer.children;
let slideshowIndex = 0;

// Functions
const lastSlide = () => {
    slideshowElements[slideshowIndex].style.display = 'none';
    slideshowIndex--;

    if (slideshowIndex < 0) {
        slideshowIndex = slideshowElements.length - 1;
    }

    slideshowElements[slideshowIndex].style.display = 'block';
    slideNum.innerHTML = `Slide ${slideshowIndex + 1} / 6`;
}

const nextSlide = () => {
    slideshowElements[slideshowIndex].style.display = 'none';
    slideshowIndex++;

    if (slideshowIndex > slideshowElements.length - 1) {
        slideshowIndex = 0;
    }

    slideshowElements[slideshowIndex].style.display = 'block';
    slideNum.innerHTML = `Slide ${slideshowIndex + 1} / 6`;
}

const buttonPressed = event => {
    event.target.style.backgroundColor = '#80BBFF';
}

const buttonReleased = event => {
    event.target.style.backgroundColor = '';
}

const captureNameVal = () => {
    return nameInput.value;
}

const updateBio = () => {
    bio.innerHTML = `Hi, my name is: ${captureNameVal()}`;
}

// Initial Code
slideshowElements[0].style.display = 'block';

// Event Listeners
backButton.onclick = lastSlide;
nextButton.onclick = nextSlide;
backButton.onmousedown = buttonPressed;
nextButton.onmousedown = buttonPressed;
backButton.onmouseup = buttonReleased;
nextButton.onmouseup = buttonReleased;
nameInput.oninput = updateBio;
