// não aceita repetiçao/não indexada
const times = new Set()

times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

//console.log(times) // Set { 'Vasco', 'São Paulo', 'Palmeiras', 'Corinthians', 'Flamengo' }
//console.log(times.size)
//console.log(times.has('Flamengo')) // true
//console.log(times.has('Botafogo')) // false

times.delete('Flamengo')

//console.log(times.has('Flamengo')) // false

const nomes = new Set(['Vinícius', 'Rocha', 'Rayza', 'Taciana'])

//console.log(nomes)


// Exemplo: 
const teste = [...new Set([{ nome: 'Vinne', idade: 24 }, { nome: 'Rayza', idade: 5 }])]

console.log(teste)

