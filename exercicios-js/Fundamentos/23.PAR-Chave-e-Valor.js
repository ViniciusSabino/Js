// par nome/valor

const saudacao = 'Opa' // contexto léxico 1 

function exec() {
    const saudacao = 'Fala'; // contexto lexico 2 (contexto mais restrito), se não acha procuro no contexto mais acima 
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        lograduro: 'Rua',
        numero: 123,
        nome: 'Tereza Cristina'
    }
};

console.log(saudacao); // Resultado = 'Opa'

console.log(exec()) // Resultado = 'Fala'

console.log(cliente) // Resultado = todo o objeto cliente

console.log(cliente.endereco.nome); // Resultado = 'Tereza Cristina'

console.log(cliente.nome); // Resultado = 'Pedro'