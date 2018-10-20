function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    }
    else {
        return area
    }
}

console.log(area(2, 2)) // Resultado = 4
console.log(area(2)) // Resultado = NaN
console.log(area()) // Resultado = NaN
console.log(area(2, 3, 4, 5, 6, 7)) // Resultado = 6 (Não quebra)
console.log(area(5, 5)) // undefined, pois não retornou nada e apenas caiu no console.log