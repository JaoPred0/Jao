function loadPage(path) {
    const contentDiv = document.getElementById('app');
    const route = routes[path] || routes['/home']; // Página padrão (home) para rotas inválidas

    contentDiv.innerHTML = '<div class="alert alert-info" role="alert">Carregando...</div>';

    setTimeout(() => {
        fetch(route)
            .then(response => {
                if (!response.ok) throw new Error('Página não encontrada');
                return response.text();
            })
            .then(html => {
                contentDiv.innerHTML = html; // Insere o conteúdo da página no div#app
            })
            .catch(err => {
                contentDiv.innerHTML = `<div class="alert alert-danger" role="alert">Erro: ${err.message}</div>`;
            });
    }, 500); // Pequeno atraso para simular carregamento
}

// Observa mudanças na hash da URL para carregar a página correspondente
window.addEventListener('hashchange', () => {
    const path = location.hash.slice(1); // Remove o # da hash
    loadPage(path);
});

// Inicializa o aplicativo ao carregar
window.addEventListener('load', () => {
    const initialPath = location.hash.slice(1) || '/home'; // Página inicial padrão é a home
    loadPage(initialPath);
});
