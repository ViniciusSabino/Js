const notas = [7, 7, 6, 5, 6, 10, 10, 33, 55, 10, 4, 2, 4, 78, 8]

/// ---------------- EXEMPLO SEM CALLBACK

let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

/// ------------------ EXEMPLO USANDO CALLBACK


let notasBaixas2 = []

filtroNotasBaixas = nota => nota < 7
notasBaixas2 = notas.filter(filtroNotasBaixas);

console.log(notasBaixas2)
// Filter => Evento que irá percorrer todos os elementos do array

// Callcack => Irá retornar um verdadeiro ou falso se a nota for menor do que 7, o verdeiro ou falso indica se o elemento irá ou não estár presente no 
// sub array retornado pela função filter
