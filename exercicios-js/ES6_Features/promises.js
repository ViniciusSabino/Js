// Criando uma promise
const promise1 = new Promise((resolve, reject) => {
  try {
    resolve("OK");
  } catch (err) {
    reject("Erro");
  }
});

// executando uma promise

promise1.then(retorno => console.log(retorno)); // retorno = "OK" 
// (o que foi passado dentro do resolve())

////////////////////////////////////////////////////// segundo exemplo

const time1 = Promise.resolve("São Paulo");

const time2 = Promise.resolve("Corinthians");

const time3 = Promise.resolve("Palmeiras");

// const [t1, t2, t3] = await Promise.all([time1, time2, time3]);

// t1 = "São Paulo"
// t2 = "Corinthians"
// t3 = "Palmeiras"

/////////////////////////////////////////////////////// terceiro exemplo

const time = Promise.resolve().then(() => {
  Promise.all([time1, time2]).then(([t1, t2]) => {
    console.log(t2);
  });
});

time.then(); // Resultado = Corinthians

/////////////////////////////////////////////////// quarto exemplo
const array = [1, 2, 3, 4, 5];

const funcao1 = array => array.map(item => item * 2);

const a = Promise.resolve(array) // [1, 2, 3, 4, 5];
  .then(console.log(array)) // [1, 2, 3, 4, 5];
  .then(funcao1); // vai chamar a função 1 passando o array [1, 2, 3, 4, 5] como argumento
