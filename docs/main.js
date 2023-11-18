// main.js

document.addEventListener('DOMContentLoaded', function () {
    // Variáveis de quantidade para cada produto
    var novoProdutoBtn = document.getElementById('novoProdutoBtn');
    var vendaMensalBtn = document.getElementById('vendaMensalBtn');
    var venderBtn = document.getElementById('venderBtn');

   // Adicionar um ouvinte de evento de clique ao botão "Novo Produto"
    var botaoNovoProduto = document.getElementById('novoProdutoBtn');
    botaoNovoProduto.addEventListener('click', function () {
        mostrarPopUp('Novo Produto');
    });

    // Adicionar um ouvinte de evento de clique ao botão "Venda Mensal"
    var botaoVendaMensal = document.getElementById('vendaMensalBtn');
    botaoVendaMensal.addEventListener('click', function () {
        mostrarPopUp('Venda Mensal');
    });

    // Adicionar um ouvinte de evento de clique ao botão "Vender"
    var botaoVender = document.getElementById('venderBtn');
    botaoVender.addEventListener('click', function () {
        mostrarPopUp('Vender');
    });

   
    var quantidadeBrahma = 10;
    var quantidadeSkol = 10;
    var quantidadePetra = 10;
    var quantidadeCabernet = 10;
    var quantidadeChardonnay = 10;
    var quantidadeMerlot = 10;
    var quantidadeMacallan = 10;
    var quantidadeJackDaniels = 10;
    var quantidadeJameson = 10;

    // Variável para total de itens
    var totalItens = calcularTotalItens();

    // Encontrar elementos HTML relacionados às quantidades
    var quantidadeCervejas = document.getElementById('quantidadeCervejas');
    var quantidadeWisky = document.getElementById('quantidadeWisky');
    var quantidadeVinho = document.getElementById('quantidadeVinho');
    var botaoEstoque = document.getElementById('estoqueGeral');
    var totalItensSpan = document.getElementById('totalItensValor');
    var itensEmFaltaSpan = document.getElementById('itensEmFalta');

    // Encontrar o modal
    var modal = document.getElementById('myModal');

    // Encontrar o botão para fechar o modal
    var fecharModal = document.getElementById('fecharModal');

    // Adicionar um ouvinte de evento de clique ao botão de estoque
    botaoEstoque.addEventListener('click', function () {
        // Exibir o modal ao clicar no botão de estoque
        modal.style.display = 'block';
        // Atualizar os valores no modal
        quantidadeCervejas.textContent = 'Cervejas: ' + (quantidadeBrahma + quantidadeSkol + quantidadePetra);
        quantidadeWisky.textContent = 'Wisky: ' + (quantidadeMacallan + quantidadeJackDaniels + quantidadeJameson);
        quantidadeVinho.textContent = 'Vinho: ' + (quantidadeCabernet + quantidadeChardonnay + quantidadeMerlot);
        // Atualizar total de itens no modal
        totalItensSpan.textContent = totalItens;
        // Identificar e exibir o item com menor quantidade em falta
        var menorQuantidadeItem = identificarMenorQuantidadeItem();
        itensEmFaltaSpan.textContent = 'Itens em falta: ' + menorQuantidadeItem.nome + ' ' + menorQuantidadeItem.quantidade;
    });

    // Adicionar um ouvinte de evento de clique ao botão para fechar o modal
    fecharModal.addEventListener('click', function () {
        // Fechar o modal ao clicar no botão de fechar
        modal.style.display = 'none';
    });

    // Adicionar um ouvinte de evento de clique ao botão "Novo Produto"
    var botaoNovoProduto = document.getElementById('novoProduto');
    botaoNovoProduto.addEventListener('click', function () {
        alert('Pop-up para Novo Produto');
        // Você pode substituir o alert acima pelo código que exibe o pop-up desejado
    });

    // Adicionar um ouvinte de evento de clique ao botão "Venda Mensal"
    var botaoVendaMensal = document.getElementById('vendaMensal');
    botaoVendaMensal.addEventListener('click', function () {
        alert('Pop-up para Venda Mensal');
        // Você pode substituir o alert acima pelo código que exibe o pop-up desejado
    });

    // Adicionar um ouvinte de evento de clique ao botão "Vender"
    var botaoVender = document.getElementById('vender');
    botaoVender.addEventListener('click', function () {
        alert('Pop-up para Vender');
        // Você pode substituir o alert acima pelo código que exibe o pop-up desejado
    });

    // Adicionar um ouvinte de evento de mudança para o campo de seleção de produtos
    var campoPreferencias = document.getElementsByName('campo_preferencias')[0];
    var quantidadeSelecionadaValor = document.getElementById('quantidadeSelecionadaValor');

    campoPreferencias.addEventListener('change', function () {
        // Atualizar o conteúdo do span com a quantidade selecionada
        switch (this.value) {
            case 'brahma':
                quantidadeSelecionadaValor.textContent = quantidadeBrahma;
                break;
            case 'skol':
                quantidadeSelecionadaValor.textContent = quantidadeSkol;
                break;
            case 'petra':
                quantidadeSelecionadaValor.textContent = quantidadePetra;
                break;
            case 'cabern':
                quantidadeSelecionadaValor.textContent = quantidadeCabernet;
                break;
            case 'chardnn':
                quantidadeSelecionadaValor.textContent = quantidadeChardonnay;
                break;
            case 'merr':
                quantidadeSelecionadaValor.textContent = quantidadeMerlot;
                break;
            case 'macallan':
                quantidadeSelecionadaValor.textContent = quantidadeMacallan;
                break;
            case 'jackdan':
                quantidadeSelecionadaValor.textContent = quantidadeJackDaniels;
                break;
            case 'james':
                quantidadeSelecionadaValor.textContent = quantidadeJameson;
                break;
            default:
                quantidadeSelecionadaValor.textContent = '0';
                break;
        }

        // Atualizar total de itens no modal
        totalItens = calcularTotalItens();
        totalItensSpan.textContent = totalItens;
    });

        function mostrarPopUp(titulo) {
            // Exibir o modal ao clicar no botão
            modal.style.display = 'block';

            // Atualizar o título do pop-up
            document.getElementById('tituloPopUp').textContent = titulo;

            // ... (outras atualizações necessárias para o conteúdo do pop-up)
        }

    // Função para calcular o total de itens
    function calcularTotalItens() {
        return (
            quantidadeBrahma + quantidadeSkol + quantidadePetra +
            quantidadeCabernet + quantidadeChardonnay + quantidadeMerlot +
            quantidadeMacallan + quantidadeJackDaniels + quantidadeJameson
        );
    }

    // Função para identificar o item com menor quantidade em falta
    function identificarMenorQuantidadeItem() {
        var itens = [
            { nome: 'Brahma', quantidade: quantidadeBrahma },
            { nome: 'Skol', quantidade: quantidadeSkol },
            { nome: 'Petra', quantidade: quantidadePetra },
            { nome: 'Cabernet Sauvignon', quantidade: quantidadeCabernet },
            { nome: 'Chardonnay', quantidade: quantidadeChardonnay },
            { nome: 'Merlot', quantidade: quantidadeMerlot },
            { nome: 'Macallan', quantidade: quantidadeMacallan },
            { nome: 'Jack Daniels', quantidade: quantidadeJackDaniels },
            { nome: 'Jameson', quantidade: quantidadeJameson }
        ];

        var menorQuantidadeItem = itens.reduce(function (menor, item) {
            return item.quantidade < menor.quantidade ? item : menor;
        }, itens[0]);

        return menorQuantidadeItem;
    }
       

});
