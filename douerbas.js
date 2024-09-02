document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.inthephot');
    const sliderItems = document.querySelectorAll('.photexp');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    let index = 0;
    const containerWidth = document.querySelector('.slider-container').offsetWidth;
    const itemWidth = sliderItems[0].offsetWidth + parseFloat(getComputedStyle(sliderItems[0]).marginRight);

    function updateSliderPosition() {
        sliderWrapper.style.transform = `translateX(-${index * itemWidth}px)`;
    }

    nextButton.addEventListener('click', () => {
        if (index < sliderItems.length - 3) { // 3 ekran genişliği kadar fotoğraf gösteriyoruz
            index++;
            updateSliderPosition();
        }
    });

    prevButton.addEventListener('click', () => {
        if (index > 0) {
            index--;
            updateSliderPosition();
        }
    });

 // Adaptif ayarlamalar
 window.addEventListener('resize', () => {
    const containerWidth = document.querySelector('.slider-container').offsetWidth;
    updateSliderPosition(); 
    });
});