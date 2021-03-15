require('./global')

console.log(MinhaApp.saudacao())
// ou
console.log(global.MinhaApp.saudacao())

// Não muda por conta do Object.freeze()
MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome)
