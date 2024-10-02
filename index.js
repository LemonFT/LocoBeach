let itemSliders = null;
let indexItemFocus = 0;
let slideInterval; 
const focusItemSlider = (slider, index) => {
    itemSliders.forEach((slider) => {
        slider.classList.remove('active');
    });
    slider.classList.add('active');
    const listImages = document.querySelector('.list-imgs');
    const newPosition = -index * 100; 
    listImages.style.left = `${newPosition}vw`;
    indexItemFocus = index;
    resetSlideInterval();
}
const intervalScrollSlide = () => {
    slideInterval = setInterval(() => {
        const nextIndex = indexItemFocus === itemSliders.length - 1 ? 0 : indexItemFocus + 1;
        const listImages = document.querySelector('.list-imgs');
        
        if (nextIndex === 0) {
            listImages.style.transition = 'none';
        } else {
            listImages.style.transition = 'left 1s ease-in-out';
        }
        
        focusItemSlider(itemSliders[nextIndex], nextIndex);
    }, 6000);
};

const resetSlideInterval = () => {
    clearInterval(slideInterval);
    intervalScrollSlide();
};

window.addEventListener('load', function () {
    itemSliders = document.querySelectorAll('.item-slider');
    itemSliders.forEach((slider, index) => {
        slider.addEventListener('click', () => {
            focusItemSlider(slider, index);
        })
    })
    intervalScrollSlide();
    document.getElementById('scrollToFooter').addEventListener('click', function(event) {
        event.preventDefault();
        const footerElement = document.getElementById('footer');
            footerElement.scrollIntoView({
            behavior: 'smooth', 
            block: 'start'     
        });
    });
});

