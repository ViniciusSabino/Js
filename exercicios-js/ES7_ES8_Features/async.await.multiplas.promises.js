const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ time: "São Paulo", libertadores: 3 });
  }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ time: "Palmeiras", libertadores: 1 });
  }, 1000);
});

async function getTtimes() {
  const spfc = promise1;
  const palmeiras = promise2;

  const promises = await Promise.all([promise1, promise2]);

  console.log(promises);
  // [ { time: 'São Paulo', libertadores: 3 },
  // { time: 'Palmeiras', libertadores: 1 } ]

  console.log(promises.map(p => p.time)); // [ 'São Paulo', 'Palmeiras' ]
}

getTtimes();
