// Array de valores
const valores = [5.1, 95, 1.5, 10];

console.log(valores[0], valores[3]); // Resultado => 5.1 , 10

// Adicionando um valor na posição 10 do array
valores[10] = 40;

// Retornando todos os elementos do array
console.log(valores);


// Retornando a quantidade de elementos do array
console.log(valores.length);

// Adicionando varios elementos diferentes ao arry => Array.push(elementos)
valores.push("Vinicius", { nome: "Teste" }, true);

console.log(valores);

// Irá retornar o último elemento inserido no array = Array.pop();
console.log(valores.pop());

// Irá deletar o elemento que está na posição 5 do array
delete valores[5];

// Resultado = object 
console.log(typeof valores); 