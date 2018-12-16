const escola = [
  {
    nome: "Turma N1",
    alunos: [
      {
        nome: "Vinicius",
        nota: 10
      },
      {
        nome: "Rayza",
        nota: 9
      }
    ]
  },
  {
    nome: "Turma N2",
    alunos: [
      {
        nome: "Rebeca",
        nota: 2
      },
      {
        nome: "Julia",
        nota: 5
      }
    ]
  }
];

const getNotaDoAluno = aluno => aluno.nota; // Função que receberá um aluno e devolverá a sua nota

const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno); // Função que recebe uma turma e retorna um array com a nota de todos os alunos dessa turma

const notas1 = escola.map(getNotasDaTurma);
console.log(notas1); // => [ [ 10, 9 ], [ 2, 5 ] ]

Array.prototype.flatMap = function(callback) {
  return Array.prototype.concat.apply([], this.map(callback));
};

arrayNotas = escola.flatMap(getNotasDaTurma);
console.log(arrayNotas);
