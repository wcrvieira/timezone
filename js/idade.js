function novaIdade() {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;

    if (idade == '') {
        idade = 0;
    }
    
    let idadeFutura = parseInt(idade) + 40;
   
    return document.getElementById('idadeFutura').value = idadeFutura;
}

function carregaJovem() {
    let url = 'images/';    
    let img = new Image(350,330);
    img.src = url;    

    return document.getElementById('novo').appendChild(img);
}

function carregaIdoso() {
    let url = 'images/';    
    let img = new Image(350,330);
    img.src = url;    

    return document.getElementById('idoso').appendChild(img);
}