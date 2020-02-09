// Pessoa => 123 => {...}
const pessoa = { nome: 'João' }

pessoa.nome = "Pedro"
console.log(pessoa); // Pessoa agora é pedro

// Resultado correto pois o que está sendo mudado é apenas um atributo do objeto
// pessoa e não o objeto todo

// ------------------------------------------------------------------

// pessoa => 456 -> {...}

// pessoa = { nome: 'Ana' }

// Resultado errado pois está tentando atribuir um objeto pessoa que está em 
// um outro endereço de memoria em outro objeto pessoa que não pode
// ter o seu endereço de memoria alterado

Object.freeze(pessoa)

pessoa.nome = "Vinicius"

console.log(pessoa) // Pessoa continua sendo Pedro por que congelei o objeto
// usando o método freeze da classe Object 