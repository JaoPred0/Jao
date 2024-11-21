// Verificar e aplicar o tema salvo no localStorage ao carregar a página
const savedTheme = localStorage.getItem('theme') || 'light'; // Recupera o tema salvo ou define o padrão como 'light'
document.body.setAttribute('data-bs-theme', savedTheme);

// Alterar o ícone dependendo do tema salvo
const themeToggleButton = document.getElementById('theme-toggle');
const icon = themeToggleButton.querySelector('i');

if (savedTheme === 'dark') {
    icon.classList.remove('bi-brightness-high-fill');
    icon.classList.add('bi-moon-stars-fill');
} else {
    icon.classList.remove('bi-moon-stars-fill');
    icon.classList.add('bi-brightness-high-fill');
}

// Script para alternar o tema
themeToggleButton.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-bs-theme');
    
    // Alternar entre o tema claro e escuro
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-bs-theme', newTheme);

    // Alterar o ícone dependendo do tema
    if (newTheme === 'dark') {
        icon.classList.remove('bi-brightness-high-fill');
        icon.classList.add('bi-moon-stars-fill');
    } else {
        icon.classList.remove('bi-moon-stars-fill');
        icon.classList.add('bi-brightness-high-fill');
    }

    // Salvar o novo tema no localStorage
    localStorage.setItem('theme', newTheme);
});