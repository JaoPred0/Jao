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


// Theme
document.addEventListener("DOMContentLoaded", function () {
    const htmlTag = document.documentElement; // Pega a tag <html>
    const themeButtons = document.querySelectorAll(".theme-btn");

    // Verifica se já tem um tema salvo no localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        htmlTag.setAttribute("data-bs-theme", savedTheme);
    }

    // Função para mudar o tema
    function changeTheme(theme) {
        htmlTag.setAttribute("data-bs-theme", theme);
        localStorage.setItem("theme", theme); // Salva no localStorage
    }

    // Adiciona evento nos botões de escolha do tema
    themeButtons.forEach(button => {
        button.addEventListener("click", function () {
            const selectedTheme = this.getAttribute("data-theme");
            changeTheme(selectedTheme);
        });
    });
});
