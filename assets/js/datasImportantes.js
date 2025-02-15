const datasImportantes = [
    { data: "2025-01-01", descricao: "Ano Novo" },
    { data: "2025-09-22", descricao: "Aniversário de Namoro" },
    { data: "2025-12-25", descricao: "Natal" },
];

// Função para verificar se a data atual é importante
function verificarDataImportante() {
    // Captura a data atual no fuso local e converte para o formato YYYY-MM-DD
    const hoje = new Date().toLocaleDateString("pt-BR").split("/").reverse().join("-");

    const dataEncontrada = datasImportantes.find(d => d.data === hoje);
    return dataEncontrada ? dataEncontrada.descricao : "Nenhuma data importante hoje.";
}

// Exporta a função
export { verificarDataImportante };
