const toggle1 = document.getElementById('education')
const toggle2 = document.getElementById('educationContent')
const toggle3 = document.getElementById('events')
const toggle4 = document.getElementById('eventsContent')
const toggle5 = document.getElementById('certifications')
const toggle6 = document.getElementById('certificationsContent')
const toggle7 = document.getElementById('subsectionToggle1')
const toggle8 = document.getElementById('subsectionToggle2')
const toggle9 = document.getElementById('subsectionToggle3')
const toggle10 = document.getElementById('experience')
const toggle11 = document.getElementById('experienceContent')
const botonCopiar = document.getElementById('copiar')
const cvLink = document.getElementById('cv-link')

function detectLanguage() {
    const lang = navigator.language || navigator.userLanguage || '';
    return lang.toLowerCase().startsWith('en') ? 'en' : 'es';
}

function applyTranslations(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n-es]').forEach(el => {
        const text = lang === 'en' ? el.dataset.i18nEn : el.dataset.i18nEs;
        if (text) el.textContent = text;
    });
}

function setCvLinkByLanguage(lang) {
    cvLink.href = lang === 'en'
        ? './pdf/CV_Simon_Carreno_2026_EN.pdf'
        : './pdf/CV_Simon_Carreno_2026.pdf';
}

async function copiarContenido() {
    try {
        await navigator.clipboard.writeText('simoncarreno2006@gmail.com');
        console.log('Contenido copiado al portapapeles');
    } catch (err) {
        console.error('Error al copiar: ', err);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const lang = detectLanguage();
    applyTranslations(lang);
    setCvLinkByLanguage(lang);

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    let currentItem = 0;
    const intervalTime = 10000;
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

    const toggleContents = [toggle2, toggle4, toggle6, toggle11];

    function showToggleContent(target) {
        toggleContents.forEach(content => {
            if (content === target) {
                content.classList.add('active');
                content.classList.remove('hide');
            } else {
                content.classList.remove('active');
                content.classList.add('hide');
            }
        });
    }

    toggle1.addEventListener("click", () => showToggleContent(toggle2));
    toggle3.addEventListener("click", () => showToggleContent(toggle4));
    toggle5.addEventListener("click", () => showToggleContent(toggle6));
    toggle10.addEventListener("click", () => showToggleContent(toggle11));

    const navbarLinks = document.querySelectorAll('.navbar a');
    const navToggle = document.getElementById('nav-toggle');
    const navbar = document.getElementById('navbar');

    function closeMobileNav() {
        navbar.classList.remove('nav-open');
        navToggle.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
    }

    navToggle.addEventListener('click', () => {
        const isOpen = navbar.classList.toggle('nav-open');
        navToggle.classList.toggle('is-active', isOpen);
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navbarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            navbarLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });

            this.classList.add('active');
            closeMobileNav();

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

    botonCopiar.addEventListener("click", copiarContenido);
});
