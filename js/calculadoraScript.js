
let numero;

function inserir(num) {
    numero = document.getElementById('resultado').innerHTML += num;
    console.log(num)
}

function apagaTudo() {
    document.getElementById('resultado').innerHTML = '';
    numero = 0;
}

function limparAnterior() {

    numero = document.getElementById('resultado').innerHTML = numero.substring(0, numero.length - 1);
}

function calcular() {
    numero = document.getElementById('resultado').innerHTML;

    if (numero) {
        numero = document.getElementById('resultado').innerHTML = eval(numero);
    }

}




function emBreve() {
    alert("Essa funcionalidade será implementanda em uma atualização futura");
}
