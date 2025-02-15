import { verificarDataImportante } from "./datasImportantes.js";

document.addEventListener("DOMContentLoaded", function () {
    // Adiciona a Navbar
    const navbar = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a id="openModal" class="navbar-brand fw-bold" href="#">Jao</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="anotacoes.html">Anotações</a>
                    </li>


                    <li class="nav-item">
                        <a class="nav-link" href="configuracoes.html">Configurações</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `;

    document.body.insertAdjacentHTML("afterbegin", navbar);

    // Adiciona o Modal com animação CSS
    const modalHTML = `
    <div class="modal fade animate__animated animate__fadeInDown" id="infoModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Informações da Data</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p id="dataAtual"></p>
                    <p id="horarioAtual"></p>
                    <p id="dataImportante"></p>
                </div>
            </div>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML("beforeend", modalHTML);

    // Configura o evento de clique no link "Jao"
    document.getElementById("openModal").addEventListener("click", function (event) {
        event.preventDefault(); // Evita recarregar a página

        const agora = new Date();
        const dataFormatada = agora.toLocaleDateString("pt-BR");
        const horarioFormatado = agora.toLocaleTimeString("pt-BR");
        const dataImportante = verificarDataImportante();

        document.getElementById("dataAtual").textContent = `📅 Data: ${dataFormatada}`;
        document.getElementById("horarioAtual").textContent = `⏰ Horário: ${horarioFormatado}`;
        document.getElementById("dataImportante").textContent = `📌 Importante: ${dataImportante}`;

        const modal = new bootstrap.Modal(document.getElementById("infoModal"));
        modal.show();
    });
});
