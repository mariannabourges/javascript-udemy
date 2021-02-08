// 1.0 é considerado inteiro e 1.1 é considerado não inteiro
// Só existe variável Number em JS, não existe float
const peso1 = 1.0 
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

// toFixed (casas decimais desejadas) serve para arredondar os números
console.log(media.toFixed(2))
// toString converte valor numérico em String
console.log(media.toString())
// toString(2) converte em valor binário
console.log(media.toString(2))
console.log(typeof media) // number
console.log(typeof Number) // function
