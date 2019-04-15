// Reduce => Use reduce() quando é preciso encontrar um valor cumulativo ou concatenado com base em elementos
// de todo o array

const alunos = [
  { nome: "João", nota: 6, bolsista: true },
  { nome: "Maria", nota: 10, bolsista: true },
  { nome: "Lays", nota: 2, bolsista: false },
  { nome: "Bruna", nota: 0, bolsista: true },
  { nome: "Joana", nota: 8.1, bolsista: true },
  { nome: "Eliane", nota: 9, bolsista: false },
  { nome: "Nivea", nota: 4, bolsista: true },
  { nome: "Rayza", nota: 2, bolsista: false },
  { nome: "Mariana", nota: 4.4, bolsista: true },
  { nome: "Andressa", nota: 7, bolsista: true }
];

//console.log(alunos.map(a => a.nota));

const resultado = alunos
  .map(aluno => aluno.nota)
  .reduce((acumulador, atual) => {
    //console.log(acumulador, atual);
    return acumulador + atual;
  }, 10);

// --------------------------------------- EXEMPLO 2 UTILIZANDO REDUCE

const filters = "nome,idade,peso";
const order = "desc";

// Objetivo - ter esse objeto utilizando reduce

/**
 *   {
 *    nome: -1,
 *    idade: -1,
 *    peso: -1
 *    }
 *
 */

const ordered = order === "desc" ? -1 : 1;

const sort = filters.split(",").reduce((acumulador, element) => {
  return { [element]: ordered, ...acumulador };
}, "");

console.log(sort);
