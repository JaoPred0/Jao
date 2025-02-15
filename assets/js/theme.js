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
