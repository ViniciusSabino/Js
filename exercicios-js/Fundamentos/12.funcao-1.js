// Exemplo de Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

// Sem retorno portando irá apenas dar um console.log 
imprimirSoma(2, 5);

// Funçao com retorno
function soma(a, b = 5) {  // b = 0 : valor padrão quando o parametro não for passado na chamada da função
    let c = a + b;
    return c;
}

console.log(soma(99));

