function consultarAPI() {
    // URL da API local
    const apiUrl = 'http://127.0.0.1:5000/docker/index';
  
    // Realiza a requisição
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Manipula os dados recebidos da API
        exibirResultado(data);
      })
      .catch(error => {
        console.error('Erro na requisição:', error);
      });
  }
  
  function exibirResultado(data) {
    // Exibe os resultados na página
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p>Dados da API:</p>
                              <pre>${JSON.stringify(data, null, 2)}</pre>`;
  }
  