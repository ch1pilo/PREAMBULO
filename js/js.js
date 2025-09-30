// Carrusel functionality - CÓDIGO CORREGIDO
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.card');
    const prevBtn = document.querySelector('.carousel-btn.prev-btn');
    const nextBtn = document.querySelector('.carousel-btn.next-btn');
    const indicators = document.querySelectorAll('.indicator');
    const carouselContainer = document.querySelector('.carousel-container');
    
    let currentIndex = 0;
    const totalCards = cards.length;
    
    console.log('Carrusel inicializado. Total de cards:', totalCards);
    console.log('Botón anterior encontrado:', !!prevBtn);
    console.log('Botón siguiente encontrado:', !!nextBtn);
    console.log('Carrusel encontrado:', !!carousel);
    
    // Función para actualizar el carrusel
    function updateCarousel() {
        console.log('Movimiento a slide:', currentIndex);
        
        // Aplicar transformación para mover el carrusel
        if (carousel) {
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        
        // Actualizar indicadores
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    // Evento para botón siguiente
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            console.log('Botón siguiente clickeado');
            currentIndex = (currentIndex + 1) % totalCards;
            updateCarousel();
        });
    }
    
    // Evento para botón anterior
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            console.log('Botón anterior clickeado');
            currentIndex = (currentIndex - 1 + totalCards) % totalCards;
            updateCarousel();
        });
    }
    
    // Eventos para indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            console.log('Indicador clickeado:', index);
            currentIndex = index;
            updateCarousel();
        });
    });
    
    // Carrusel automático
    let autoSlide;
    function startAutoSlide() {
        autoSlide = setInterval(function() {
            currentIndex = (currentIndex + 1) % totalCards;
            updateCarousel();
        }, 5000);
    }
    
    // Pausar el carrusel automático al hacer hover
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', function() {
            console.log('Carrusel pausado');
            clearInterval(autoSlide);
        });
        
        carouselContainer.addEventListener('mouseleave', function() {
            console.log('Carrusel reanudado');
            startAutoSlide();
        });
    }
    
    // Iniciar carrusel automático
    startAutoSlide();
    
    // Inicializar el carrusel en la posición correcta
    updateCarousel();
});