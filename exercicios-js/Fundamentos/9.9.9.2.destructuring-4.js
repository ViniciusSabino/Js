function rand([min = 0, max = 1000]) {

    if (min > max) {
        [min, max] = [max, min] // Realizando a inversão das duas variaveis, min recebe max e max recebe min
        const valor = Math.random() * (max - min) + min
        return Math.floor(valor);
    }
}

const a = [50, 40]; // Irá realizar a inversão, pois utilizando o destructurindo o min receberá a primeira posição e max receberá a segunda posição 
// do array

console.log(rand(a));