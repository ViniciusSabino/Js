// Faz um arredondamento para cima = Math.ceil(float); 
console.log(Math.ceil(6.1)); // Resultado = 7


const obj1 = {}

// Como não existe o atributo 'nome', ele irá criar dinamicamente e já atribuindo o valor de 'Bola'
obj1.nome = 'Bola'
obj1['nome'] = 'Bola'

console.log(obj1.nome); // Resultado = Bola

obj1.nome = 'Tenis'

console.log(obj1.nome); // Resultado = Tenis

function Obj(nome) {
    this.nome = nome // usando o this faz com que a variavel nome fique visivel pra quem for instanciar um objeto do tipo "Obj"
}

const obj2 = new Obj('cadeira');
const obj3 = new Obj('mesa');

console.log(obj2.nome); // Resultado = 'cadeira' por que usei o this
// Se o this não fosse usado, não seria possivel, pois nome 'var' e visivel apenas dentro do escopo de uma função

console.log(obj3.nome);  // Resultado = mesa