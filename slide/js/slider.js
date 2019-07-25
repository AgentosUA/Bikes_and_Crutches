let leftButton = document.getElementsByClassName('left-arrow')[0];
let rightButton = document.getElementsByClassName('right-arrow')[0];

let slides = document.getElementsByClassName('slide');

let currentSlide = 0;

const showSlide = (slide) => {
    slide.style.display = 'block';
}

const hideSlide = (slide) => {
    slide.style.display = 'none';
}

let prevSlide = () => {
    hideSlide(slides[currentSlide]);
    currentSlide--;
    if (currentSlide === -1) {
        currentSlide = slides.length -1;
    }

    if (currentSlide > slides.length -1) {
        currentSlide = 0;
    }
    showSlide(slides[currentSlide]);
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 1500);
}

let nextSlide = () => {
    hideSlide(slides[currentSlide]);
    currentSlide++;
    if (currentSlide === -1) {
        currentSlide = slides.length -1;
    }

    if (currentSlide > slides.length -1) {
        currentSlide = 0;
    }
    showSlide(slides[currentSlide]);
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 1500);
}

let slideInterval = setInterval(nextSlide, 1500);

leftButton.addEventListener('click', prevSlide);
rightButton.addEventListener('click', nextSlide);