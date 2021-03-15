console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

// Mesmo objeto referenciado pro 3 variaveis
this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

// Somente module.exports é exportado a patir de um modulo
// Ou seja, não adianta criar um novo objeto
// Se não for em module.exports
exports = {
    nome: 'Teste'
}
console.log(module.exports)
module.exports = { publico: true }