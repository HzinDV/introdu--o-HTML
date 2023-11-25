document.addEventListener('DOMContentLoaded', function () {
    const headers = new Headers({
      "Access-Control-Allow-Origin": "*"
    });
  
    const requestOptions = {
      method: 'GET',
      headers: headers,
      cache: 'no-cache',
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    };
  
    fetch('http://localhost:8080/clientes', requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        const tabelaClientes = document.getElementById('tabelaClientes');
        tabelaClientes.innerHTML = ''; // Limpa a tabela antes de preenchê-la novamente
  
        data.forEach(cliente => {
          const row = tabelaClientes.insertRow();
  
          Object.values(cliente).forEach(value => {
            const cell = row.insertCell();
            cell.textContent = value;
          });
  
          const cellAcoes = row.insertCell();
          const btnEditar = document.createElement('button');
          btnEditar.textContent = 'Editar';
          btnEditar.addEventListener('click', () => editarCliente(cliente.id));
  
          const btnRemover = document.createElement('button');
          btnRemover.textContent = 'Remover';
          btnRemover.addEventListener('click', () => removerCliente(cliente.id));
  
          cellAcoes.appendChild(btnEditar);
          cellAcoes.appendChild(btnRemover);
        });
      })
      .catch(error => {
        console.error('Erro na requisição:', error);
      });


      function editarCliente(id) {
        // Redireciona para a página de edição com o ID do cliente como parâmetro
        window.location.href = `editar_cliente.html?id=${id}`;
      }
      

      const requestDeleteOptions = {
        method: 'DELETE',
        headers: headers,
        cache: 'no-cache',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      };
  
    function removerCliente(id) {
    console.log(`Remover cliente com ID ${id}`);

    // Realiza a requisição DELETE para a URL com o ID do cliente
    fetch(`http://localhost:8080/clientes/${id}`, requestDeleteOptions)
        .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }
        console.log('Cliente removido com sucesso.');
        // Adicione lógica adicional conforme necessário após a remoção
        })
        .catch(error => {
        console.error('Erro na requisição:', error);
        });
    }

  });
  