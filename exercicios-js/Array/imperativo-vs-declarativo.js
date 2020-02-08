const alunos = [
  { nome: "João", nota: 6, bolsista: true },
  { nome: "Maria", nota: 10, bolsista: true },
  { nome: "Lays", nota: 2, bolsista: true },
  { nome: "Bruna", nota: 0, bolsista: true },
  { nome: "Joana", nota: 8.1, bolsista: true },
  { nome: "Eliane", nota: 9, bolsista: true },
  { nome: "Nivea", nota: 4, bolsista: true },
  { nome: "Rayza", nota: 2, bolsista: true },
  { nome: "Mariana", nota: 4.4, bolsista: true },
  { nome: "Andressa", nota: 7, bolsista: false }
];

// Imperativo (No exemplo: Descrevendo passo a passo como tudo deve ser feito)
let total1 = 0;

for (let i = 0; i < alunos.length; i++) {
  total1 += alunos[i].nota;
}

console.log(total1 / alunos.length);

// Declarativo 
//(No exemplo: Você se preocupa mais com o que deve ser feito, do que o como irá ser feito 
//(dados internos não precisam estar explicitamente mostradas))

const getNotas = aluno => aluno.nota;
const soma = (total, atual) => total + atual;

const total2 = alunos.map(getNotas).reduce(soma) / alunos.length;

console.log(total2);
