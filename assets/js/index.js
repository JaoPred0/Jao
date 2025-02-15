// Importação de bibliotecas externas
const scriptBootstrap = document.createElement('script');
scriptBootstrap.src = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js';
document.head.appendChild(scriptBootstrap);

const scriptAOS = document.createElement('script');
scriptAOS.src = 'https://unpkg.com/aos@next/dist/aos.js';
document.head.appendChild(scriptAOS);

const scriptSwiper = document.createElement('script');
scriptSwiper.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
document.head.appendChild(scriptSwiper);


// Inicializar AOS após o carregamento do script
scriptAOS.onload = () => {
    AOS.init({ duration: 500 });
};