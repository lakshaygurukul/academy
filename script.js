document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideCount = slides.children.length;
    const visibleSlides = 3;
    const slideWidth = 100 / visibleSlides;
    let index = 0;

    const updateSlide = () => {
        slides.style.transform = `translateX(-${index * slideWidth}%)`;
    };

    document.querySelector('.prev').addEventListener('click', () => {
        index = (index === 0) ? Math.ceil(slideCount / visibleSlides) - 1 : index - 1;
        updateSlide();
    });

    document.querySelector('.next').addEventListener('click', () => {
        index = (index === Math.ceil(slideCount / visibleSlides) - 1) ? 0 : index + 1;
        updateSlide();
    });

    // Initialize the slider
    updateSlide();

    // Handle image click to update display container
    const displayedImage = document.getElementById('displayed-image');
    
    slides.addEventListener('click', (event) => {
        const clickedSlide = event.target.closest('.slide');
        if (clickedSlide) {
            const newImageSrc = clickedSlide.dataset.image;
            displayedImage.src = newImageSrc;
        }
    });
});
