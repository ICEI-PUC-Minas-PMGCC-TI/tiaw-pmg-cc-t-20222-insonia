var w = 0;
var x = 0;
var y = 0;
var z = 0;

function leDados2() {
    let strDados = localStorage.getItem('db3');
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
    localStorage.setItem('db3', JSON.stringify(dados));
  }

  function incluirArtigoX() {
    // Ler os dados do localStorage
    let objDados = leDados();
  
    // Incluir um novo contato
    let artigo = document.getElementById('btnArtigo1').title;
    let novoArtigo = {
      nome: artigo,
      lido: "Lido",
    };
  
    if (x < 1) {
      objDados.artigos.push(novoArtigo);
      x = x + 1;
    }
  
    // Salvar os dados no localStorage novamente
    salvaDados(objDados);
  
    // Atualiza os dados da tela
    imprimeDados();
  }

  function incluirArtigoY() {
    // Ler os dados do localStorage
    let objDados = leDados();
  
    // Incluir um novo contato
    let artigo = document.getElementById('btnArtigo2').title;
    let novoArtigo = {
      nome: artigo,
      lido: "Lido",
    };
  
    if (y < 1) {
      objDados.artigos.push(novoArtigo);
      y = y + 1;
    }
  
    // Salvar os dados no localStorage novamente
    salvaDados(objDados);
  
    // Atualiza os dados da tela
    imprimeDados();
  }
  function incluirArtigoZ() {
    // Ler os dados do localStorage
    let objDados = leDados();
  
    // Incluir um novo contato
    let artigo = document.getElementById('btnArtigo3').title;
    let novoArtigo = {
      nome: artigo,
      lido: "Lido",
    };
  
    if (z < 1) {
      objDados.artigos.push(novoArtigo);
      z = z + 1;
    }
  
    // Salvar os dados no localStorage novamente
    salvaDados(objDados);
  
    // Atualiza os dados da tela
    imprimeDados();
  }
  
  
  function imprimeDados2() {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados();
  
    for (i = 0; i < objDados.postagens.length; i++) {
      strHtml += `<a>${objDados.postagens[i].artigo}</a>
                      <p>${objDados.postagens[i].lido}</p>`
    }
  
    tela.innerHTML = strHtml;
  }
  
  // Configura os botões
  document.getElementById('btnArtigo1').addEventListener('click', incluirArtigoX);
  document.getElementById('btnArtigo2').addEventListener('click', incluirArtigoY);
  document.getElementById('btnArtigo3').addEventListener('click', incluirArtigoZ);
  