function meuObjeto() {}
console.log(meuObjeto.prototype)

const objeto1 = new meuObjeto
const objeto2 = new meuObjeto
// Objetos criados apartir de uma mesma função construtora apontam para o mesmo prototype
console.log(objeto1.__proto__ === objeto2.__proto__)
console.log(meuObjeto.prototype === objeto1.__proto__)

meuObjeto.prototype.nome = 'Anônimo'
meuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

objeto1.falar()

objeto2.nome = 'Rafael'
objeto2.falar()

const objeto3 = {}
objeto3.__proto__ = meuObjeto.prototype
objeto3.nome = 'Objeto3'
objeto3.falar()

// Resumindo a loucura...
console.log((new meuObjeto).__proto__ === meuObjeto.prototype)
console.log(meuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)