const toggle1 = document.getElementById('education')
const toggle2 = document.getElementById('educationContent')
const toggle3 = document.getElementById('events')
const toggle4 = document.getElementById('eventsContent')
const toggle5 = document.getElementById('certifications')
const toggle6 = document.getElementById('certificationsContent')


document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.carousel-item');
    let currentItem = 0;
    const intervalTime = 3000;
    let autoSlide = setInterval(showNextItem, intervalTime);

    toggle2.classList.toggle('hide')
    toggle4.classList.toggle('hide')
    toggle6.classList.toggle('hide')

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

toggle1.addEventListener("click", ()=> {
    toggle2.classList.toggle('hide')
})

toggle3.addEventListener("click", ()=> {
    toggle4.classList.toggle('hide')
})

toggle5.addEventListener("click", ()=> {
    toggle6.classList.toggle('hide')
})
