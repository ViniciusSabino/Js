// Tagged Templates => Processa o template string dentro de uma função

function tag(partes, ...valores) {
  console.log(partes); // Exemplo 1 = ["", está, ""]
  console.log(valores); // Exemplo 1 = ["Vinicius", "Aprovado"]
  return "Outra String";
}

const aluno = "Vinicius";
const situacao = "Aprovado";

console.log(tag`${aluno} está ${situacao}`); // Exemplo 1  => Outra String
