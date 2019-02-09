// Uma promise que é resolvida em 2 segundos
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ time: "São Paulo", liberadores: 3 });
  }, 2000);
});

// Uma segunda promise que é resolvida mais rápido
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ time: "Corinthians", liberadores: 1 });
  }, 600);
});

Promise.all([promise1, promise2]).then(arrayPromisesResolvidas => {
  //console.log(arrayPromisesResolvidas);
});

// Resultado = Array onde em cada indice possui o retorno de uma promise resolvida

// O Promise.all só será resolvido quando todas as promises do array de promises for resolvidas

// [ { time: 'São Paulo', liberadores: 3 },
//   { time: 'Corinthians', liberadores: 1 } ]

Promise.race([promise1, promise2]).then(arrayPromisesResolvidas => {
  console.log(arrayPromisesResolvidas); // { time: 'Corinthians', liberadores: 1 }
});

// Promise.race() => Quando a primeira promise for resolvida do array de promises, todas as demais promises são
// ignoradas e a função é finalizada
