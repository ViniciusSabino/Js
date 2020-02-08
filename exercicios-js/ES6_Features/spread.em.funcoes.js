const sanduiche = (bread, cheese, sauce) => {
  console.log(
    `Your sandwich with ${bread} bread, ${cheese} cheese and ${sauce} is done!`
  );
}

const ingredientes = ["white", "cheddar", "barbcue"];

// os elementos do array serão encaixados como argumentos da função, 
// exatamente na ordem

sanduiche(...ingredientes); 
// Resultado = Your sandwich with white bread, cheddar cheese and barbcue is done!
