const map = new Map([
  ["Tricolor", () => console.log("São Paulo")],
  ["Timão", () => console.log("Corinthians")]
]);

map.get("Tricolor")(); // Resultado = "São Paulo"

map.set("Peixe", () => console.log("Santos"));

map.get("Peixe")(); // Resultado = "Santos"
