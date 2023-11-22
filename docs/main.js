document.addEventListener('DOMContentLoaded', function () {
    // Evento de mudança no select
    var selectProduto = document.getElementsByName('campo_preferencias')[0];
    var quantidadeSelecionadaValor = document.getElementById('quantidadeSelecionadaValor');

    selectProduto.addEventListener('change', function () {
        // Obtém a quantidade do produto selecionado
        var quantidadeProdutoSelecionado = obterQuantidadeProdutoSelecionado(this.value);

        // Atualiza a quantidade no HTML após o texto "Quantidade"
        quantidadeSelecionadaValor.textContent =  quantidadeProdutoSelecionado;

        // Outras atualizações que você desejar fazer quando o produto é alterado
        totalItens = calcularTotalItens();
        totalItensSpan.textContent = totalItens;
    });

    // Função para obter a quantidade do produto selecionado
    function obterQuantidadeProdutoSelecionado(produto) {
        switch (produto) {
            case 'brahma':
                return quantidadeBrahma;
            case 'skol':
                return quantidadeSkol;
            case 'petra':
                return quantidadePetra;
            case 'cabern':
                return quantidadeCabernet;
            case 'chardnn':
                return quantidadeChardonnay;
            case 'merr':
                return quantidadeMerlot;
            case 'macallan':
                return quantidadeMacallan;
            case 'jackdan':
                return quantidadeJackDaniels;
            case 'james':
                return quantidadeJameson;
            default:
                return 0;
        }
    }   
    var quantidadeBrahma = 10;
    var quantidadeSkol = 9;
    var quantidadePetra = 10;
    var quantidadeCabernet = 10;
    var quantidadeChardonnay = 10;
    var quantidadeMerlot = 10;
    var quantidadeMacallan = 10;
    var quantidadeJackDaniels = 10;
    var quantidadeJameson = 10;

    var totalItens = calcularTotalItens();

    var quantidadeCervejas = document.getElementById('quantidadeCervejas');
    var quantidadeWisky = document.getElementById('quantidadeWisky');
    var quantidadeVinho = document.getElementById('quantidadeVinho');
    var totalItensSpan = document.getElementById('totalItensValor');
    var itensEmFaltaSpan = document.getElementById('itensEmFalta');
    
    var botaoEstoque = document.getElementById('estoqueGeral');
    var modal = document.getElementById('myModal');
    var fecharModal = document.getElementById('fecharModal');

    botaoEstoque.addEventListener('click', function () {
        quantidadeCervejas.textContent = 'Cervejas: ' + (quantidadeBrahma + quantidadeSkol + quantidadePetra);
        quantidadeWisky.textContent = 'Wisky: ' + (quantidadeMacallan + quantidadeJackDaniels + quantidadeJameson);
        quantidadeVinho.textContent = 'Vinho: ' + (quantidadeCabernet + quantidadeChardonnay + quantidadeMerlot);
        totalItensSpan.textContent = totalItens;
        
        var menorQuantidadeItem = identificarMenorQuantidadeItem();
        itensEmFaltaSpan.textContent = 'Itens em falta: ' + menorQuantidadeItem.nome + ' ' + menorQuantidadeItem.quantidade;

        modal.style.display = 'block';
    });

    fecharModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

        totalItens = calcularTotalItens();{
        totalItensSpan.textContent = totalItens;
    }

    function calcularTotalItens() {
        return (
            quantidadeBrahma + quantidadeSkol + quantidadePetra +
            quantidadeCabernet + quantidadeChardonnay + quantidadeMerlot +
            quantidadeMacallan + quantidadeJackDaniels + quantidadeJameson
        );
    }

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
