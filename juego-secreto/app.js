//Declaramos las variables
let numeroSecreto = 0;
let intentos = 0;
let listNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elememtoHTML = document.querySelector(elemento);
    elememtoHTML.innerHTML = texto;
    return;
};


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listNumerosSorteados);
    //si ya sorteamos todos los números
    if(listNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibnles');
    } else {
        //  si el número generado está incluido en la lista
        if (listNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }
        else {
            listNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }  
}

function condicionesIniciales () {
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', `Elige un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();





