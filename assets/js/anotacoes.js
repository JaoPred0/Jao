document.addEventListener("DOMContentLoaded", carregarAnotacoes);

function salvarNota() {
    const input = document.getElementById("inputNota");
    const texto = input.value.trim();

    if (texto === "") return;

    const notas = JSON.parse(localStorage.getItem("notas")) || [];
    const novaNota = { texto, data: new Date().toLocaleString() };

    notas.push(novaNota);
    localStorage.setItem("notas", JSON.stringify(notas));

    input.value = "";
    carregarAnotacoes();
}

function carregarAnotacoes() {
    const lista = document.getElementById("listaAnotacoes");
    lista.innerHTML = "";

    const notas = JSON.parse(localStorage.getItem("notas")) || [];

    if (notas.length === 0) {
        lista.innerHTML = "<p class='text-center text-muted animate__animated animate__fadeIn'>Nenhuma anotação salva.</p>";
        return;
    }

    notas.forEach((nota, index) => {
        const notaElement = document.createElement("div");
        notaElement.classList.add("nota-card", "animate__animated", "animate__fadeInUp");
        notaElement.setAttribute("data-aos", "fade-up");

        notaElement.innerHTML = `
                    <p><strong>${nota.texto}</strong></p>
                    <small class="text-muted">📅 ${nota.data}</small>
                    <button class="btn btn-danger btn-sm float-end" onclick="deletarNota(${index})">
                        🗑 Excluir
                    </button>
                `;
        lista.appendChild(notaElement);
    });
}

function deletarNota(index) {
    let notas = JSON.parse(localStorage.getItem("notas")) || [];
    notas.splice(index, 1);
    localStorage.setItem("notas", JSON.stringify(notas));
    carregarAnotacoes();
}

function baixarJSON() {
    const notas = JSON.parse(localStorage.getItem("notas")) || [];
    const blob = new Blob([JSON.stringify(notas, null, 2)], { type: "application/json" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "backup_anotacoes.json";
    link.click();
}

function carregarBackup() {
    const input = document.getElementById("inputBackup");
    const arquivo = input.files[0];

    if (!arquivo) {
        alert("Selecione um arquivo .json para carregar.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
        try {
            const notas = JSON.parse(event.target.result);
            localStorage.setItem("notas", JSON.stringify(notas));
            carregarAnotacoes();
        } catch {
            alert("Erro ao carregar o backup. Verifique se o arquivo é válido.");
        }
    };
    reader.readAsText(arquivo);
}

function toggleConfig() {
    const icons = document.getElementById("configIcons");
    icons.classList.toggle("show");
}