// Operadores Lógicas

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTV50 = trabalho1 && trabalho2;
    const comprarTV32 = trabalho1 != trabalho2; // SIMULA O OU ESCLUSIVO
    const manterSaudavel = !comprarSorvete; // SIMULA O OPERADOR UNÁRIO (NOT)

    return {
        comprarSorvete, // True
        comprarTV50, // True
        comprarTV32, // False
        manterSaudavel // False
    }
}

console.log(compras(true, true))