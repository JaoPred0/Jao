document.addEventListener("DOMContentLoaded", function () {
    const inputNota = document.getElementById("inputNota");
    const btnSalvar = document.getElementById("btnSalvar");
    const modalSucesso = new bootstrap.Modal(document.getElementById("modalSucesso"));

    // Função para mostrar ou esconder o botão
    function atualizarBotao() {
        if (inputNota.value.trim().length > 0) {
            btnSalvar.style.opacity = "1";
            btnSalvar.style.visibility = "visible";
        } else {
            btnSalvar.style.opacity = "0";
            btnSalvar.style.visibility = "hidden";
        }
    }

    // Evento para mostrar o botão apenas quando o usuário digita algo
    inputNota.addEventListener("input", atualizarBotao);

    // Salva a anotação no localStorage e exibe o modal
    btnSalvar.addEventListener("click", () => {
        const nota = inputNota.value.trim();
        if (!nota) return;

        let notasSalvas = JSON.parse(localStorage.getItem("notas")) || [];
        notasSalvas.push({ texto: nota, data: new Date().toLocaleString() });

        localStorage.setItem("notas", JSON.stringify(notasSalvas));

        // Limpa o input e esconde o botão
        inputNota.value = "";
        atualizarBotao();

        // Abre o modal de sucesso
        modalSucesso.show();
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2, // Padrão para celular
    spaceBetween: 5,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: { // Para telas maiores que 768px (tablets e desktops)
            slidesPerView: 5,
        },
        1024: { // Para telas maiores que 1024px (PCs grandes)
            slidesPerView: 4,
        }
    }
});
