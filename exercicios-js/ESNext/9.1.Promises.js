// Promises => Uma promessa

// Utilizasse Promise quando se deseja trabalhar com algum tipo de processamento assincrono

// 1 - A promise pode ser resolvida
// 2 - A promise pode ser rejeitada

// Exemplo 1

// Criado uma função que recebe dois parametros e retorna uma promessa
// Dentro da promessa existe um SetTimeout, quanto o tempo chegar ao fim, a promise chamará a função resolve passando a frase como parametro
// A função resolve recebe apenas um parametro

function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(_ => {
      resolve(frase);
    }, segundos * 1000);
  });
}

falarDepoisDe(5, "Que Legal") // Irá esperar 5 segundos
  .then(frase => frase.concat(" - Que Legal Denovo"))
  .then(frase => frase.concat(" - Que Legal mais uma vez"))
  .then(frase => console.log(frase))
  .catch(error => console.log(error)); // Resultado = Que Legal - Que Legal Denovo - Que Legal mais uma vez
