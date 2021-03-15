const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(pessoa)
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(elemento => {
    console.log(`${elemento[0]}: ${elemento[1]}`)
})

// Usando operador destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

// defineProperty permite definir atributos às propriedades
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ES6 ECMAScript 2015)
// Contatenar objetos em um outro
const objetoDestino = { a: 1 }
const objeto1 = { b: 2 }
const objeto2 = { c: 3, a: 4}
const objetoFinal = Object.assign(objetoDestino, objeto1, objeto2)
console.log(objetoFinal)

// Object.freeze
Object.freeze(objetoFinal)
objetoFinal.c = 1234
console.log(objetoFinal)