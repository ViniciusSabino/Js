> **_ Variáveis _**

Use nome de variavéis que tenham significado e sejam pronunciáveis

```javascript
// Bad
const yyyymmmmdstr = moment().format("YYYY/MM/DD");

// Good
const currentDate = moment().format("YYYY/MM/DD");
```

Use o mesmo vocabulário para o mesmo tipo de variável

```javascript
// Bad
getUserInfo();
getClientData();
getCustomerRecord();

// Good
getUser();
```

Use nomes pesquisáveis

Nós iremos ler mais código que escrever. É importante que o código que escrevemos seja legível e pesquisável. Não dando nomes em variáveis que sejam significativos para entender nosso programa, machucamos nossos leitores. Torne seus nomes pesquisáveis. Ferramentas como buddy.js e ESLint podem ajudar a identificar constantes sem nome.

```javascript
// Bad
// Para que diabos serve 86400000?
setTimeout(blastOff, 86400000);

// Good
// Declare-as como `const` global em letras maiúsculas.
const MILLISECONDS_IN_A_DAY = 86400000;
setTimeout(blastOff, MILLISECONDS_IN_A_DAY);
```

Use variáveis explicativas

```javascript
// Bad
const address = "One Infinite Loop, Cupertino 95014";
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
saveCityZipCode(
  address.match(cityZipCodeRegex)[1],
  address.match(cityZipCodeRegex)[2]
);

// Good
const address = "One Infinite Loop, Cupertino 95014";
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
const [, city, zipCode] = address.match(cityZipCodeRegex) || [];
saveCityZipCode(city, zipCode);
```

Eveite Mapeamento Mental

Explicito é melhor que implícito

```javascript
// Bad
const locations = ["Austin", "New York", "San Francisco"];
locations.forEach(l => {
  doStuff();
  doSomeOtherStuff();
  // ...
  // ...
  // ...
  // Espera, para que serve o `l` mesmo?
  dispatch(l);
});

// Good
const locations = ["Austin", "New York", "San Francisco"];
locations.forEach(location => {
  doStuff();
  doSomeOtherStuff();
  // ...
  // ...
  // ...
  dispatch(location);
});
```

Não adicione contextos desnecessários

Se o nome de sua classe/objeto já lhe diz alguma coisa, não as repita nos nomes de suas variáveis

```javascript
// Bad
const Car = {
  carMake: "Honda",
  carModel: "Accord",
  carColor: "Blue"
};
function paintCar(car) {
  car.carColor = "Red";
}

// Good
const Car = {
  make: "Honda",
  model: "Accord",
  color: "Blue"
};
function paintCar(car) {
  car.color = "Red";
}
```

Use argumentos padrões ao invés de curto circuitar ou usar condicionais

Argumentos padrões são geralmente mais limpos do que curto circuitos.
Esteja ciente que se você usá-los, sua função irá fornecer valores padrões para argumentos udefined. Outros valores "falsos" como '', "", false, null,
0, e NaN, não serão substituídos por valores padrões.

```javascript
// Bad
function createMicrobrewery(name) {
  const breweryName = name || "Hipster Brew Co.";
  // ...
}

// Good
function createMicrobrewery(breweryName = "Hipster Brew Co.") {
  // ...
}
```
