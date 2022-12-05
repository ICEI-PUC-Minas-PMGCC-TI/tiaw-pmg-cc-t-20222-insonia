var w = 0;
var x = 0;
var y = 0;
var z = 0;

function leDados () {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse (strDados);
    }
    else {
        objDados = { artigos: [  ]}           
    }

    return objDados;
}


function leDados2 () {
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

function salvaDados2 (dados) {
    localStorage.setItem ('db2', JSON.stringify (dados));
}

function incluirArtigoW (){
    // Ler os dados do localStorage
    let objDados = leDados2();

    // Incluir um novo contato
    let artigo = document.getElementById ('btnArtigo1').title;
    let novoArtigo = {
        nome : artigo,
        lido : "Lido",
    };

    if(w < 1)
    {
    objDados.artigos.push (novoArtigo);
    w = w + 1;
    }

    // Salvar os dados no localStorage novamente
    salvaDados2 (objDados);

}
function incluirArtigoX (){
    // Ler os dados do localStorage
    let objDados = leDados2();

    // Incluir um novo contato
    let artigo = document.getElementById ('btnArtigo2').title;
    let novoArtigo = {
        nome : artigo,
        lido : "Lido",
    };
    
    if(x < 1)
    {
    objDados.artigos.push (novoArtigo);
    x = x + 1;
    }

    // Salvar os dados no localStorage novamente
    salvaDados2 (objDados);

}
function incluirArtigoY (){
    // Ler os dados do localStorage
    let objDados = leDados2();

    // Incluir um novo contato
    let artigo = document.getElementById ('btnArtigo3').title;
    let novoArtigo = {
        nome : artigo,
        lido : "Lido",
    };
    
    if(y < 1)
    {
    objDados.artigos.push (novoArtigo);
    y = y + 1;
    }

    // Salvar os dados no localStorage novamente
    salvaDados2 (objDados);

}
function incluirArtigoZ (){
    // Ler os dados do localStorage
    let objDados = leDados2();

    // Incluir um novo contato
    let artigo = document.getElementById ('btnArtigo3').title;
    let novoArtigo = {
        nome : artigo,
        lido : "Lido",
    };
    
    if(z < 1)
    {
    objDados.artigos.push (novoArtigo);
    z = z + 1;
    }

    // Salvar os dados no localStorage novamente
    salvaDados2 (objDados);


}

function imprimeDados () {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados ();
    
    for (i=0; i< objDados.postagens.length; i++) 
    {
        {
        strHtml += `<p>${objDados.postagens[i].titulo} - ${objDados.postagens[i].texto}</p>`
        }
    }
    tela.innerHTML = strHtml;

}

// Configura os botões
document.getElementById ('btnCarregaDados').addEventListener ('click', imprimeDados);
document.getElementById ('btnArtigo1').addEventListener ('click', incluirArtigoW);
document.getElementById ('btnArtigo2').addEventListener ('click', incluirArtigoX);
document.getElementById ('btnArtigo3').addEventListener ('click', incluirArtigoY);


