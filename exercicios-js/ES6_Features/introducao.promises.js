// Promise => Um objeto com uma ação que ainda não foi finalizada, 
// mas que no futuro tem como ser finalizada de alguma forma

// resolve => É um método que irá resolver a promise
// reject => É um método que irá rejeitar a minha promise

var defer = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve("Promise Resolvida depois de 2 segundos");
    } else {
      reject("Ocorreu um erro na promise depois de 2 segundos");
    }
  }, 2000);
});

defer
  .then(data => {
    console.log(data); // Promise Resolvida depois de 2 segundos
  })
  .catch(erro => {
    console.log(erro); // Ocorreu um erro na promise depois de 2 segundos
  });

// then => É chamado quando minha promise é resolvida com sucesso, 
// o parametro chamado "data" é o dado que foi passado
// quando minha promise foi resolvida (em resolve())

// catch => É chamado quando minha promise é rejeitada, o parametro do erro é o dado 
// que foi passado quando minha promise chamou a função reject

// Encadeando várias chamadas ao método then()

defer
  .then(data => {
    console.log(data); // Promise Resolvida depois de 2 segundos
    return "Vinícius";
  })
  .then(data => {
    console.log(data); // Vinícius (retorno da promise anterior)
  });

// Resultado

// Console.log 1 => Promise Resolvida depois de 2 segundos
// Console.log 2 => Vinícius
