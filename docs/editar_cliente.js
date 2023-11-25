// editar_cliente.js
document.addEventListener('DOMContentLoaded', function () {
    const formularioEdicao = document.getElementById('formularioEdicao');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');

    // Obtém o ID do cliente da URL
    const params = new URLSearchParams(window.location.search);
    const idCliente = params.get('id');
  
    // Adicione outros campos do formulário conforme necessário
  
    formularioEdicao.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Obtém os valores dos campos do formulário
      const nome = nomeInput.value;
      const email = emailInput.value;
      // Obtenha outros valores conforme necessário
  
      // Monta o objeto de dados a ser enviado
      const dadosCliente = {
        name: nome,
        email: email,
        // Adicione outros campos conforme necessário
      };
  
      // Realiza a requisição PUT para a URL com os dados do cliente
      fetch(`http://localhost:8080/clientes/${idCliente}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosCliente),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
          }
          return response.json();
        })
        .then(data => {
          console.log('Edições salvas com sucesso:', data);
          // Redireciona de volta à página principal ou outra página de sua escolha
          window.location.href = 'index.html';
        })
        .catch(error => {
          console.error('Erro na requisição:', error);
        });
    });
  });
  