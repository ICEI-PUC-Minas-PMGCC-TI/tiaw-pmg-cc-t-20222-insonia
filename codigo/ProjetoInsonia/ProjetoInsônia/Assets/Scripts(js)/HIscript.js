function leDados () {
    let strDados = localStorage.getItem('db2');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse (strDados);
    }
    else {
        objDados = { artigos: [  ]}           
    }

    return objDados;
}

function salvaDados(dados) {
  localStorage.setItem('db2', JSON.stringify(dados));
}

function imprimeDados () {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados ();
    
    for (i=0; i< objDados.artigos.length; i++) 
    {
        {
        strHtml += `<p>${objDados.artigos[i].nome} - ${objDados.artigos[i].lido}</p>`
        }
    }
    tela.innerHTML = strHtml;

}

// Configura os botões
document.getElementById('btnCarregar').addEventListener('click', imprimeDados);

