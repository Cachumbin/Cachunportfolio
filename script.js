const toggle1 = document.getElementById('education')
const toggle2 = document.getElementById('educationContent')
const toggle3 = document.getElementById('events')
const toggle4 = document.getElementById('eventsContent')
const toggle5 = document.getElementById('certifications')
const toggle6 = document.getElementById('certificationsContent')
const toggle7 = document.getElementById('subsectionToggle1')
const toggle8 = document.getElementById('subsectionToggle2')
const toggle9 = document.getElementById('subsectionToggle3')


document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.carousel-item');
    let currentItem = 0;
    const intervalTime = 3000;
    let autoSlide = setInterval(showNextItem, intervalTime);

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
    toggle2.classList.remove('hide')
    toggle4.classList.add('hide')
    toggle6.classList.add('hide')
})

toggle3.addEventListener("click", ()=> {
    toggle2.classList.add('hide')
    toggle4.classList.remove('hide')
    toggle6.classList.add('hide')
})

toggle5.addEventListener("click", ()=> {
    toggle2.classList.add('hide')
    toggle4.classList.add('hide')
    toggle6.classList.remove('hide')
})
