console.log(this === global) // False
console.log(this === module) // False

console.log(this === module.exports) // True
console.log(this === exports) // True

console.log(this) // => {} -> Como não exportei nenhum objeto, mostra um objeto vazio no (module.exports)


function logThis() {
    console.log("Dentro de uma função")
    console.log(this === exports) // False
    console.log(this === module.exports) // False
    console.log(this === global) // True

    console.log(this) // Objeto Global do Node
    this.teste2 = 2; // Aponta para o objeto Global do Node
}

this.teste = '1' // Aponta para o module.exports
logThis()