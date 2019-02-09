// Promise => Um objeto com uma ação que ainda não foi finalizada, mas que no futuro tem como ser finalizada de alguma forma

// resolve => É um método que irá resolver a promise
// reject => É um método que irá rejeitar a minha promise

var defer = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve("Promise Resolvida");
    } else {
      reject("Ocorreu um erro");
    }
  }, 2000);
});

defer
  .then(data => {
    console.log(data);
  })
  .catch(erro => {
    console.log(erro);
  });

// then => É chamado quando minha promise é resolvida com sucesso, o parametro chamado "data" é o dado que foi passado
// quando minha promise foi resolvida (em resolve())

// catch => É chamado quando minha promise é rejeitada, o parametro do erro é o dado que foi passado quando minha
// promise chamou a função reject

// Encadeando várias chamadas ao método then()

defer
  .then(data => {
    console.log(data); // Promise Resolvida
    return "Vinícius";
  })
  .then(data => {
    console.log(data); // Vinícius
  });

// Resultado

// Promise Resolvida
// Vinícius
