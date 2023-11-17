// Função para lidar com o envio do formulário de cadastro
function cadastrarUsuario(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtenha os valores dos campos de entrada
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    // nós podemos enviar os dados do usuário para o servidor aqui ou realizar outras ações
    // Por enquanto, vamos apenas exibir uma mensagem
    alert(`Obrigado por se cadastrar, ${nome}! Você receberá notificações em ${email}.`);
}

// Adicione um ouvinte de eventos ao formulário de cadastro 
const formularioCadastro = document.getElementById("cadastroForm");
formularioCadastro.addEventListener("submit", cadastrarUsuario);
