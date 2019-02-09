const alunos = [
    { nome: 'João', nota: 6, bolsista: true },
    { nome: 'Maria', nota: 10, bolsista: true },
    { nome: 'Lays', nota: 2, bolsista: true },
    { nome: 'Bruna', nota: 0, bolsista: true },
    { nome: 'Joana', nota: 8.1, bolsista: true },
    { nome: 'Eliane', nota: 9, bolsista: true },
    { nome: 'Nivea', nota: 4, bolsista: true },
    { nome: 'Rayza', nota: 2, bolsista: true },
    { nome: 'Mariana', nota: 4.4, bolsista: true },
    { nome: 'Andressa', nota: 7, bolsista: false }
]

// Desafio 1: Retornar um verdadeiro ou false, se todos os alunos são bolsistas nesse array

console.log(alunos.map(aluno => aluno.bolsista))

const resultado1 = alunos.map(aluno => aluno.bolsista).reduce((acumulador, atual) => {
    return acumulador && atual
})

console.log(resultado1)


// Desafio 2: Retornar um verdadeiro ou false, se algum aluno é bolsista nesse array

const resultado2 = alunos.map(aluno => aluno.bolsista).reduce((acumulador, atual) => {
    return acumulador || atual
})

console.log(resultado2)

// Nesses dois exemplos
// map => Retorna um novo array, mas com os elementos do array tendo apenas o booleano que indica se é bolsista ou não
// reduce => Irá percorrer todos os elementos do array, pegando o primeiro elemento e fazendo uma determinada operação com o segundo elemento, o resultado
//  é então operado novamente com o elemento seguinte