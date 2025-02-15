document.addEventListener("DOMContentLoaded", function () {
    loadExams();
});

// Adicionar prova
document.getElementById("examForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const subject = document.getElementById("subject").value;
    const date = document.getElementById("date").value;
    const important = document.getElementById("important").checked;
    const content = document.getElementById("content").value;

    const listItem = createExamItem(subject, date, content, important);
    document.getElementById("examList").appendChild(listItem);

    saveExams();
    document.getElementById("examForm").reset();
    bootstrap.Modal.getInstance(document.getElementById("addExamModal")).hide();
});

// Criar item de prova na lista
function createExamItem(subject, date, content, important) {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between align-items-center";
    listItem.dataset.subject = subject;
    listItem.dataset.date = date;
    listItem.dataset.content = content;
    listItem.dataset.important = important;

    updateListItemStyle(listItem, date, important);

    listItem.innerHTML = `
        <input type="checkbox" class="exam-checkbox me-2">
        <span>${subject} - ${date}</span>
        <div>
            <button class="btn btn-info btn-sm me-2" onclick="viewExam(this)">Ver</button>
            <button class="btn btn-danger btn-sm" onclick="prepareDeleteExam(this)">Apagar</button>
        </div>
    `;

    return listItem;
}

// Ver conteúdo da prova
function viewExam(button) {
    const listItem = button.closest("li");
    document.getElementById("examContent").innerText = listItem.dataset.content;
    new bootstrap.Modal(document.getElementById("viewExamModal")).show();
}

// Confirmar exclusão de prova
function prepareDeleteExam(button) {
    const listItem = button.closest("li");
    document.getElementById("confirmDeleteBtn").onclick = function () {
        listItem.remove();
        saveExams();
        bootstrap.Modal.getInstance(document.getElementById("deleteExamModal")).hide();
    };
    new bootstrap.Modal(document.getElementById("deleteExamModal")).show();
}

// Apagar provas selecionadas
function confirmDeleteSelected() {
    document.querySelectorAll(".exam-checkbox:checked").forEach(checkbox => {
        checkbox.closest("li").remove();
    });
    saveExams();
}

// Atualizar estilo da prova conforme a data e importância
function updateListItemStyle(listItem, date, important) {
    const today = new Date();
    const examDate = new Date(date);
    const diffTime = examDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    listItem.classList.remove("bg-secondary", "bg-warning", "text-danger", "fw-bold");

    if (diffDays < 0) {
        listItem.classList.add("bg-secondary", "text-muted");
    } else if (diffDays <= 3) {
        listItem.classList.add("bg-warning");
    }

    if (important === "true" || important === true) {
        listItem.classList.add("text-danger", "fw-bold");
    }
}

// Salvar provas no localStorage
function saveExams() {
    const exams = [];
    document.querySelectorAll("#examList li").forEach(item => {
        exams.push({
            subject: item.dataset.subject,
            date: item.dataset.date,
            content: item.dataset.content,
            important: item.dataset.important
        });
    });
    localStorage.setItem("exams", JSON.stringify(exams));
}

// Carregar provas do localStorage
function loadExams() {
    const exams = JSON.parse(localStorage.getItem("exams")) || [];
    exams.forEach(exam => {
        const listItem = createExamItem(exam.subject, exam.date, exam.content, exam.important);
        document.getElementById("examList").appendChild(listItem);
    });
}

// Baixar backup
function downloadBackup() {
    const exams = localStorage.getItem("exams");
    if (!exams) {
        showModalMessage("error", "Nenhum backup encontrado.");
        return;
    }

    const blob = new Blob([exams], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "backup_exames.json";
    a.click();
    URL.revokeObjectURL(a.href);
    showModalMessage("success", "Backup baixado com sucesso!");
}

// Restaurar backup automaticamente ao selecionar um arquivo
document.getElementById("backupFile").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const exams = JSON.parse(e.target.result);
            if (!Array.isArray(exams)) throw new Error("Formato inválido");

            localStorage.setItem("exams", JSON.stringify(exams));
            document.getElementById("examList").innerHTML = ""; // Limpa a lista
            loadExams(); // Recarrega os exames
            showModalMessage("success", "Backup restaurado com sucesso!");
        } catch (error) {
            showModalMessage("error", "Erro ao carregar backup: " + error.message);
        }
    };
    reader.readAsText(file);
});

// Mostrar mensagem em modal
function showModalMessage(type, message) {
    if (type === "success") {
        document.getElementById("successMessage").innerText = message;
        new bootstrap.Modal(document.getElementById("successModal")).show();
    } else if (type === "error") {
        document.getElementById("errorMessage").innerText = message;
        new bootstrap.Modal(document.getElementById("errorModal")).show();
    }
}
