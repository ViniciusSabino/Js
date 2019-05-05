let numero = 1
{
    let numero = 2
    console.log('dentro=', numero); // Resultado = 2
}

console.log('fora=', numero); // Resultado = 1

// DICAS

// LET = Visivel apenas dentro de um scopo (bloco de {})
// Quando existe duas variaveis declaradas como LET e com o mesmo nome, irá mostrar o valor dela, quando foi declarado no menor scopo, ou seja 
    // mais proximo