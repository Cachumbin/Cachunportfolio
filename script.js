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
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    let currentItem = 0;
    const intervalTime = 5000;
    let autoSlide = setInterval(showNextItem, intervalTime);


    function showNextItem() {
        const totalItems = carouselItems.length;
        
        carouselItems[currentItem].classList.remove('active');
        dots[currentItem].classList.remove('active');

        currentItem = (currentItem + 1) % totalItems;

        carouselItems[currentItem].classList.add('active');
        dots[currentItem].classList.add('active');
    }


    function showPrevItem() {
        const totalItems = carouselItems.length;

        carouselItems[currentItem].classList.remove('active');
        dots[currentItem].classList.remove('active');

        currentItem = (currentItem - 1 + totalItems) % totalItems;

        carouselItems[currentItem].classList.add('active');
        dots[currentItem].classList.add('active');
    }

    nextButton.addEventListener('click', function() {
        clearInterval(autoSlide);
        showNextItem();
        autoSlide = setInterval(showNextItem, intervalTime);
    });

    prevButton.addEventListener('click', function() {
        clearInterval(autoSlide);
        showPrevItem();
        autoSlide = setInterval(showNextItem, intervalTime);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            clearInterval(autoSlide);

            carouselItems[currentItem].classList.remove('active');
            dots[currentItem].classList.remove('active');

            currentItem = index;

            carouselItems[currentItem].classList.add('active');
            dots[currentItem].classList.add('active');

            autoSlide = setInterval(showNextItem, intervalTime);
        });
    });
});

toggle1.addEventListener("click", ()=> {
    toggle2.classList.add('active')
    toggle4.classList.remove('active')
    toggle6.classList.remove('active')
})

toggle3.addEventListener("click", ()=> {
    toggle2.classList.remove('active')
    toggle4.classList.add('active')
    toggle6.classList.remove('active')
})

toggle5.addEventListener("click", ()=> {
    toggle2.classList.remove('active')
    toggle4.classList.remove('active')
    toggle6.classList.add('active')
})

document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll('.navbar a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            navbarLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });

            this.classList.add('active');

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            const sectionBottomPosition = targetSection.offsetTop + targetSection.offsetHeight;
            const scrollToPosition = sectionBottomPosition - window.innerHeight;

            window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth'
            });
        });
    });
});