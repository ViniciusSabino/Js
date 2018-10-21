const contatorA = require('./instanciaUnica')
const contatorB = require('./instanciaUnica')

const contatorC = require('./instanciaNova')()
const contatorD = require('./instanciaNova')()

contatorA.inc()
contatorA.inc()

console.log(contatorB.valor) // Resultado = 3 -> Mesmo que importado duas vezes, o node manteve o valor para os dois modulos importados,
// pois o manteve o valor em cache para as duas instancias 

contatorC.inc()
contatorC.inc()

console.log(contatorD.valor) // Resultado = 1 => Os objetos são indepentendes, pois foi criada uma nova instancia

