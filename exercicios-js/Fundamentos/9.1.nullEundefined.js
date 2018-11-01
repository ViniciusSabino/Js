let valor // não inicializada 

// Undefined => Nunca foi inicializada
// Null => Ausencia de valor, significa que não aponta para nenhum endereço de memoria


let variavel = null

// Forma 1 

if (variavel && variavel.nome) { // Primeiro verifica se a variavel é nula e depois tenta acessar o campo 
    console.log('Verificou');
}

// DICAS 

// 1 - Evite atribuir undefined 

