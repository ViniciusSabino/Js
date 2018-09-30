// Armazendo o retorno de uma função a uma variavel
const imprimirSoma = function (a, b) {
    return a + b;
}
console.log(imprimirSoma(2, 1));


// Armazendo uma função Arrow em uma variavel
const soma = (a, b) => {   // => Substitui o nome "function"
    return a + b;
}

console.log(soma(6, 22));


// Função Arrow com retorno implicito
const subtracao = (a, b) => a - b; // Uma única sentença de código em apenas uma linha

console.log(subtracao(4, 2));