const fetch = require("node-fetch");

const posts = fetch("https://willianjusten.com.br/search.json");

// Promise { <pending> } => significa que a primise ainda está pendente, 
// não foi resolvida

posts.then(data => data.json()).then(data => console.log(data)); 
// Listou todos os elementos do JSON da requisição realizada
