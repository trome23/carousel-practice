const slides = document.querySelectorAll(".carousel-item")
const carouselButtonPrev = document.querySelector("#carousel-button-prev")
const carouselButtonNext = document.querySelector("#carousel-button-next")

let slidePosition = 0
const totalSlides = slides.length

carouselButtonNext.addEventListener('click', moveToNextSlide)

carouselButtonPrev.addEventListener('click', moveToPrevSlide)

function moveToNextSlide() {
    hideAllslides()
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0
    } else {
        slidePosition++
    }
    slides[slidePosition].classList.add("carousel-item-visible")
}

function moveToPrevSlide() {
    hideAllslides()
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1
    } else {
        slidePosition--
    }
    slides[slidePosition].classList.add("carousel-item-visible")
}

function hideAllslides() {
    for (let slide of slides) {
        slide.classList.remove("carousel-item-visible")
        slide.classList.add("carousel-item-hidden")
    }
}
