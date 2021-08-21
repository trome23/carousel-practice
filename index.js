const slides = document.querySelectorAll(".carousel-item")
const carouselButtonPrev = document.querySelector("#carousel-button-prev")
const carouselButtonNext = document.querySelector("#carousel-button-next")

let slidePosition = 0
const totalSlides = slides.length

carouselButtonNext.addEventListener('click', moveToNextSlide)

carouselButtonPrev.addEventListener('click', moveToPrevSlide)

function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0
    } else {
        slidePosition++
    }

    slides[slidePosition].classList.add("carousel-item-visible")
}

function moveToPrevSlide() {
    console.log("prev")
}

