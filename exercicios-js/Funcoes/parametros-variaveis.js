// Dentro da função soma, tem um for que irá percorrer todos os argumentos 
// que forem passados na chamada da função, é irá somar, 
// no final irá retornar a soma do valor de todos os argumentos

function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

function teste() {
    let teste;
    teste = arguments[1]
    return teste;
}

// arguments => palavra reservada do javascript que representa uma coleção de todos os 
// parametros que foram passados em uma função 

// arguments[i] => acessa o valor do argumento da determinada posição


console.log(0); // Resultado = 0
console.log(soma(2, 2, 2)); // Resultado = 6

console.log(teste("Vinicius", "Rocha")); // Resultado = "Rocha"

