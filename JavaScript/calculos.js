function somar(){
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var resposta = document.getElementById('resposta');
    var n1 = Number(num1.value);
    var n2 = Number(num2.value);

    var soma = n1 + n2
    resposta.innerText = soma
}

function subtrair(){
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var resposta = document.getElementById('resposta');
    var n1 = Number(num1.value);
    var n2 = Number(num2.value);

    var subtrair = n1 - n2
    resposta.innerText = subtrair
}

function multiplicar(){
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var resposta = document.getElementById('resposta');
    var n1 = Number(num1.value);
    var n2 = Number(num2.value);

    var multiplicar = n1 * n2
    resposta.innerText = multiplicar
}

function dividir(){
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var resposta = document.getElementById('resposta');
    var n1 = Number(num1.value);
    var n2 = Number(num2.value);

    var dividir = n1 / n2
    resposta.innerText = dividir
}

function media(){
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var resposta = document.getElementById('resposta');
    var n1 = Number(num1.value);
    var n2 = Number(num2.value);

    var media = (n1 + n2) / 2
    resposta.innerText = media
}