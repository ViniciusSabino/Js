// ------------------ Função em JS é First-Class Object (Citizens)
// Higher-order function

// Criar de forma literal
function fun1() { }

// Armazenar em uma variavel
const fun2 = () => 'Função em variavel';

// Armazenar em um array
const array = [(a, b) => a + b, fun1, fun2];

console.log(array[0](1, 3)); // Invocando uma função que está armazenada em um array
console.log(array[2]());

// Armazenar em um atributo de objeto
const obj = {};
obj.falar = () => 'Eae men';
console.log(obj.falar);  // Resultado = [Function]
console.log(obj.falar()); // Resultado = Eae men


// Passar função como parametro
function run(fun) {
    fun()
}

const f1 = () => console.log('Executei F1');

run(f1)

// Uma função pode retornar/conter uma função
const soma = (a, b) => (c) => console.log(a + b + c);

soma(2, 3)(5) // Primeira possibilidade

const outro = soma(10, 2) // Segunda possibilidade
outro(10)
