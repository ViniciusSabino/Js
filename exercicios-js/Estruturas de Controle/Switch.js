const ImprimirResultado = function (nota) {
    switch (Math.floor(nota)) {

        case 10: // Primeira forma de colocar os cases
        case 9:
            console.log('Quadro de Honra')
            console.log("Parabens!!")
            break
        case 8: case 7: // Segunda forma de colocar os cases
            console.log("Aprovado")
            console.log("Não fez mais que a obrigação!!")
            break
        case 6:
        case 5:
            console.log("Recuperação")
            console.log("Estude mais!!!")
            break
        default:
            console.log("Reprovado")
            console.log("Sem Palavras!!!")
            break
    }

    // Caso tenha um código nessa região, ele será executado, pois apenas irá sair do switch apenas e não de dentro da função
}

// Dentro de cada case, o uso das {} não é necessário 

ImprimirResultado(10);