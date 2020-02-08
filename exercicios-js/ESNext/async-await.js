// Async/Await

const http = require("http");

// Exemplo usando Promise

const getTurma = letra => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let resultado = "";
      res.on("data", dados => {
        resultado += dados;
      });
      res.on("end", _ => {
        try {
          resolve(JSON.parse(resultado));
        } catch (e) {
          reject(e);
        }
      });
    });
  });
};

getTurma("A").then(res => console.log(res));

// Exemplo utilizando Async/Await
// Objetivo de simplificar o uso de promises

let obterAlunos = async _ => {
  const turmaA = await getTurma("A");
  const turmaB = await getTurma("B");
  const turmaC = await getTurma("C");
  return []
    .concat(turmaA)
    .concat(turmaB)
    .concat(turmaC);
}; // Retorna um objeto AsyncFunction

obterAlunos()
  .then(alunos => alunos.map(a => a.nome))
  .then(nomes => console.log(nomes));
