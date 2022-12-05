function leDados() {
  let strDados = localStorage.getItem('db');
  let objDados = {};

  if (strDados) {
    objDados = JSON.parse(strDados);
  }
  else {
    objDados = {
      postagens: [

      ]
    }
  }

  return objDados;
}

function salvaDados(dados) {
  localStorage.setItem('db', JSON.stringify(dados));
}

function incluirArtigo() {
  // Ler os dados do localStorage
  let objDados = leDados();

  // Incluir um novo contato
  let strTitulo = document.getElementById('campoNome').value;
  let strTexto = document.getElementById('campoComentario').value;
  let novoArtigo = {
    titulo: strTitulo,
    texto: strTexto,
  };
  objDados.postagens.push(novoArtigo);

  // Salvar os dados no localStorage novamente
  salvaDados(objDados);

  // Atualiza os dados da tela
  imprimeDados();
}

function imprimeDados() {
  let tela = document.getElementById('tela');
  let strHtml = '';
  let objDados = leDados();

  for (i = 0; i < objDados.postagens.length; i++) {
    strHtml += `<p>${objDados.postagens[i].titulo} - ${objDados.postagens[i].texto}</p>`
  }

  tela.innerHTML = strHtml;
}

// Configura os botões
document.getElementById('btnCarregaDados').addEventListener('click', imprimeDados);
document.getElementById('btnIncluirArtigo').addEventListener('click', incluirArtigo);

