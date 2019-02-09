// estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
  a = a || 1; // [Valor] = true, [undefined] = false || 1
  b = b || 1;
  c = c || 1;

  return a + b + c;
}

// como a função não recebeu parametros, os valores receberam automáticamente o valor de 1
console.log(soma1()); // Resultado = 3

console.log(soma1(5, 5, 5)); // Resultado = 15

function soma2(a, b, c) {
  a = a !== undefined ? a : 1;
  b = 1 in arguments ? b : 1;
  c = isNaN(c) ? 1 : c;
}

// valor padrão do es2015 (Melhor Solução)
function soma3(a = 1, b = 1, c = 1) {
  return a + b + c;
}

console.log(soma3()); // Resultado = 3 // Pois utilizou todos os 3 valores padrões
