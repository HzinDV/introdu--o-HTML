// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Encontrar o botão de estoque
    
    var quantidadeCervejas = document.getElementById('quantidadeCervejas');
    var quantidadeWisky = document.getElementById('quantidadeWisky');
    var quantidadeVinho = document.getElementById('quantidadeVinho');
    var botaoEstoque = document.getElementById('estoqueGeral');

    // Encontrar o modal
    var modal = document.getElementById('myModal');

    // Encontrar o botão para fechar o modal
    var fecharModal = document.getElementById('fecharModal');

    // Adicionar um ouvinte de evento de clique ao botão de estoque
    botaoEstoque.addEventListener('click', function () {
        // Exibir o modal ao clicar no botão de estoque
        modal.style.display = 'block';
    });

    // Adicionar um ouvinte de evento de clique ao botão para fechar o modal
    fecharModal.addEventListener('click', function () {
        // Fechar o modal ao clicar no botão de fechar
        modal.style.display = 'none';
    });

    // Adicionar um ouvinte de evento de mudança para o campo de seleção de produtos
    var campoPreferencias = document.getElementsByName('campo_preferencias')[0];
    var quantidadeSpan = document.getElementById('quantidadeSelecionada');
    quantidadeCervejas.textContent += quantidadePadrao;
    quantidadeWisky.textContent += quantidadePadrao;
    quantidadeVinho.textContent += quantidadePadrao;

    campoPreferencias.addEventListener('change', function () {
        // Atualizar o conteúdo do span com a quantidade selecionada
        quantidadeSpan.textContent = 'Quantidade: ' + this.value;
    });
});
