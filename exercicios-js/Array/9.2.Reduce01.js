// Reduce => 

const alunos = [
    { nome: 'João', nota: 6, bolsista: true },
    { nome: 'Maria', nota: 10, bolsista: true },
    { nome: 'Lays', nota: 2, bolsista: false },
    { nome: 'Bruna', nota: 0, bolsista: true },
    { nome: 'Joana', nota: 8.1, bolsista: true },
    { nome: 'Eliane', nota: 9, bolsista: false },
    { nome: 'Nivea', nota: 4, bolsista: true },
    { nome: 'Rayza', nota: 2, bolsista: false },
    { nome: 'Mariana', nota: 4.4, bolsista: true },
    { nome: 'Andressa', nota: 7, bolsista: true },
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(aluno => aluno.nota).reduce((acumulador, atual) => {
    console.log(acumulador, atual)
    return acumulador + atual

}, 10)