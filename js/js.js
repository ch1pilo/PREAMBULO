  var count_particles, stats, update;
      stats = new Stats;
      stats.setMode(0);
      stats.domElement.style.position = 'absolute';
      stats.domElement.style.left = '0px';
      stats.domElement.style.top = '0px';
      document.body.appendChild(stats.domElement);
      count_particles = document.querySelector('.js-count-particles');
      update = function() {
        stats.begin();
        stats.end();
        if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
          count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
      };
      requestAnimationFrame(update);

              document.addEventListener('DOMContentLoaded', function() {
            const carousel = document.querySelector('.carousel');
            const cards = document.querySelectorAll('.card');
            const prevBtn = document.querySelector('.prev-btn');
            const nextBtn = document.querySelector('.next-btn');
            const indicators = document.querySelectorAll('.indicator');
            
            let currentIndex = 0;
            const totalCards = cards.length;
            
            // Función para actualizar el carrusel
            function updateCarousel() {
                carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
                
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
            nextBtn.addEventListener('click', function() {
                currentIndex = (currentIndex + 1) % totalCards;
                updateCarousel();
            });
            
            // Evento para botón anterior
            prevBtn.addEventListener('click', function() {
                currentIndex = (currentIndex - 1 + totalCards) % totalCards;
                updateCarousel();
            });
            
            // Eventos para indicadores
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', function() {
                    currentIndex = index;
                    updateCarousel();
                });
            });
            
            // Carrusel automático (opcional)
            let autoSlide = setInterval(function() {
                currentIndex = (currentIndex + 1) % totalCards;
                updateCarousel();
            }, 5000); // Cambia cada 5 segundos
            
            // Pausar el carrusel automático al hacer hover
            const carouselContainer = document.querySelector('.carousel-container');
            carouselContainer.addEventListener('mouseenter', function() {
                clearInterval(autoSlide);
            });
            
            carouselContainer.addEventListener('mouseleave', function() {
                autoSlide = setInterval(function() {
                    currentIndex = (currentIndex + 1) % totalCards;
                    updateCarousel();
                }, 5000);
            });
        });