// Callback => Chamar de Volta

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

// Ideia do Callback = você passar uma função como parametro para uma determinada função
// e quanto determinado evento acontecer dentro da função que tem o callback, esse callback ser chamado de volta (pode ser varias ou uma vez)

fabricantes.forEach(imprimir)
// 1. Mercedes
// 2. Audi
// 3. BMW

fabricantes.forEach(fabricante => console.log(fabricante)) // Retornar o valor em cada posição do array
// Mercedes
// Audi
// BMW

// Resumindo, para cada evento (iteracao feita pela função forEach)
// um evento foi chamado (callback = printar na tela o valor em cada posição do array)