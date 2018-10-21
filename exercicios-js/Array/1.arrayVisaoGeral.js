let aprovados = ["Vinicius", "Denis", "Maria", "Lucas"]

console.log(aprovados[2]) // Resultado = Maria

// --------> Adicionando valores ao array ou modificando os valores caso já exista elementos
aprovados[4] = "João"
aprovados.push("Ana", "Conceição")

// --------> Lendo valores do array
console.log(aprovados[4]) // João
console.log(aprovados[6]) // Conceição

// ----------> Ordenando o array "aprovados" em ordem crescente

aprovados.sort()

// -----------------> Deletando itens do array
delete aprovados[1] // Elemento de indice 1 será igual a undefined


// -----------------> Deletando itens do array de um certo ponto até outro
aprovados.splice(1, 2) // Irá excluir o elemento da posição 1 até o elemento da posição 2
console.log(aprovados)

// -----------------> Deletando ou não elementos e támbem adicionando novos elementos

// Array até o momento => //[ 'Ana', 'João', 'Lucas', 'Maria', 'Vinicius' ]
aprovados.splice(1, 4, 'Lays', 'Taciana', 'Ster')

// Resultado = ['Ana', 'Lays','Taciana','Ster']
console.log(aprovados)