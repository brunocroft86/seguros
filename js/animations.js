// Inicializar WOW.js
new WOW().init();

// Adicionar animação de hover nas imagens dos serviços
document.addEventListener('DOMContentLoaded', function() {
    const serviceImages = document.querySelectorAll('.service-img img');
    
    serviceImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Animar elementos ao rolar
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.wow');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.visibility = 'visible';
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Executar uma vez ao carregar a página
});