const funcs = [];

for (let i = 0; i < 10; i++) {
    funcs.push(function () { // Irá armazenar uma funçao anonima em cada elemento do array, a função apenas mostra um console.log do valor do i na iteração
        console.log(i);
    });
};

// Chamando a função que armazenada em cada posição do array
funcs[2](); // Resultado = 2
funcs[8](); // Resultado = 8

