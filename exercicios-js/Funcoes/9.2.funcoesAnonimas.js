// Constante soma irá receber uma função anonima que retornará a soma dos valores de 2 parametros
const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4) // Resultado = 7

imprimirResultado(5, 5, soma) // Resultado = 10

imprimirResultado(10, 10, function (x, y) { // Resultado = 20
    return x + y
})

imprimirResultado(30, 20, (x, y) => x + y) // Resultado = 50

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar() // Resultado = "Opá"