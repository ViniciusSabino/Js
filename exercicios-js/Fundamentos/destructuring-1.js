// Operador de desestruturação = Tira da estrutura de algum dado - ES2015

// Objeto => {}
// Array => []

const pessoal = {
    nome: 'Vinicius',
    idade: 22,
    endereco: {
        rua: 'Rua ABC',
        numero: 100
    }
};

// Tirando de dentro de uma estrutura (objeto), o nome e a idade 
// e criando essas variaveis
const { nome, idade } = pessoal;

console.log('Nome = ' + nome + ' Idade = ' + idade);

// Tirando de dentro de uma estrutura, o nome e atribuindo a constante "n", 
// e a idade atribuindo a constante = "i"
const { nome: n, idade: i } = pessoal;

console.log('Nome = ' + n, ' Idade = ' + i);

// Desestruturando um objeto, e para a constante "bemHumorada" atribuir o valor de true, 
// caso não exista atributos com esse nome no objeto 'pessoal'
const { sobrenome, bemHumorada = true } = pessoal;

console.log(sobrenome); // Resultado = undefined
console.log(bemHumorada); // Resultado = true (definido como default);


// Criando as variaveis equivalentes aos atributos de endereço do objeto pessoa
// OBS: o nome "endereço" não será uma variavel nova por conta da desestrituração, 
// apenas as mais internas como (logrodouro, numero e cep)
const { endereco: { logradouro, numero, cep } } = pessoal;

console.log(logradouro); // Resultado = undefined
console.log(numero); // Resultado = 100 (apenas numero é de fato um atributo de endereco 
// do objeto 'pessoa')

console.log(cep); // Resultado = udefined




