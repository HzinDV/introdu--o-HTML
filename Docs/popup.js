// Adicione funções para abrir e fechar os modais
function abrirModal(idModal) {
    document.getElementById(idModal).style.display = "block";
}

function fecharModal(idModal) {
    document.getElementById(idModal).style.display = "none";
}

// Adicione event listeners aos botões para abrir os modais correspondentes
document.getElementById("novoProdutoBtn").addEventListener("click", function() {
    abrirModal("myModalNovoProduto");
});

document.getElementById("vendaMensalBtn").addEventListener("click", function() {
    abrirModal("myModalVendaMensal");
});

document.getElementById("venderBtn").addEventListener("click", function() {
    abrirModal("myModalVender");
});
