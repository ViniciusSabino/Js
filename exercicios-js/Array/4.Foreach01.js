// Foreach 01

const aprovados = ['Vinicius', 'Ana', 'Raquel', 'Jose', 'João', 'Tamara', 'Lays']


// Para cada elemento do array, será printado o indice e o valor do elemento do array
aprovados.forEach((nome, indice) => console.log(`${indice + 1} - ${nome}`))

// Printando apenas os valores dos elementos do array (1 por 1)
aprovados.forEach(nome => console.log(nome))


// Armazenando primeiro em uma viravel a função que será chamado quando for percorrido cada elemento do array
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

// Armazenando primeiro em uma viravel a função que será chamado quando for percorrido cada elemento do array

// Ordens do parametro
// ¹ - o valor do array
// ² - o indice do array

const exibirAprovadosIndice = (nome, indice) => console.log(`indice ${indice + 1} - valor ${nome}`)
aprovados.forEach(exibirAprovadosIndice)

