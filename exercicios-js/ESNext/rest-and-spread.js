// --------------------------- Operador Rest/Spread

// rest => Juntar
// spread => Espalhar

// -------------------------- usar Spread com objeto  

const funcionario = { nome: "Maria", salario: 144829.0 };

console.log(funcionario); // { nome: "Maria", salario: 144829.0 };

const cloneFuncionario = { ativo: true, ...funcionario }; 
// Criando um novo objeto com o atributo ativo mais todos os atributos do objeto funcionario

console.log(cloneFuncionario); // { ativo: true, nome: 'Maria', salario: 144829 }

// -------------------------------------  Usar Spread com array 

const grupoA = ["João", "Maria", "Pedro"];
const grupoFinal = ["Anderson", "Rayza", ...grupoA]; 
// Espalhando todos os elementos do array grupoA dentro do array grupoFinal

console.log(grupoA); // [ 'João', 'Maria', 'Pedro' ]

console.log(grupoFinal); // [ 'Anderson', 'Rayza', 'João', 'Maria', 'Pedro' ]
