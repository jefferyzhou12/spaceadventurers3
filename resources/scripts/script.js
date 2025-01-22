// Varibles
const backButton = document.getElementById('back');
const nextButton = document.getElementById('next');
const slideNum = document.getElementById('slide-num');
const slideshowContainer = document.getElementById('slideshow-container');
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

// Initial Code
slideshowElements[0].style.display = 'block';
slideNum.innerHTML = 'Slide 1 / 6';

// Event Listeners
backButton.onclick = lastSlide;
nextButton.onclick = nextSlide;
backButton.onmousedown = buttonPressed;
nextButton.onmousedown = buttonPressed;
backButton.onmouseup = buttonReleased;
nextButton.onmouseup = buttonReleased;
