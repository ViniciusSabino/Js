let comparaComThis = function (param) {
    console.log(this)
    console.log(this == param)
}

/// ------------------------------------------------ EXEMPLO 1 

// comparaComThis(global)

// global = Objeto Global do Node.js

// o this dentro da função irá apontar para o objeto global que foi passado por parametro


// ---------------------------------------------- EXEMPLO 2 

const obj = { nome: "Vinicius" }
comparaComThis = comparaComThis.bind(obj) // O this que for usado dentro da função comparaComThis irá resolver para o objeto chamado "obj", mesmo que 
// que a função tenha o parametro como sendo a variavel global do node 

//comparaComThis(global)

// --------------------------------- COMPARACAO USANDO ARROW FUNCTION

this.Pessoa = { nome: 'vinicius' }
let comparaComThisArrow = param => {
    console.log(this) // this = module.exports
    console.log(this == param)
}

// this usado em uma arrow function irá apontar para o modulo ou objeto no qual a função foi criada

// THIS COM ARROW FUNCTION = this associado ao contexto no qual a função foi escrita

comparaComThisArrow(global);
