document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.carousel-item');
    let currentItem = 0;
    const intervalTime = 3000;
    let autoSlide = setInterval(showNextItem, intervalTime);

    function showNextItem() {
        items[currentItem].classList.remove('active');
        currentItem = (currentItem + 1) % items.length;
        items[currentItem].classList.add('active');
    }

    function showPrevItem() {
        items[currentItem].classList.remove('active');
        currentItem = (currentItem - 1 + items.length) % items.length;
        items[currentItem].classList.add('active');
    }

    document.querySelector('.next').addEventListener('click', function() {
        clearInterval(autoSlide);
        showNextItem();
        autoSlide = setInterval(showNextItem, intervalTime);
    });

    document.querySelector('.prev').addEventListener('click', function() {
        clearInterval(autoSlide);
        showPrevItem();
        autoSlide = setInterval(showNextItem, intervalTime);
    });
});
