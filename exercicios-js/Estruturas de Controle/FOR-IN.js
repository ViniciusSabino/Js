// Array

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (i in notas) {
    console.log(notas[i]);
}

// Object

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Rosa',
    idade: 29,
    peso: 64
}

// Percorrendo todos os atributos do objeto pessoa
for (p in pessoa) {
    console.log(pessoa[p]);
}