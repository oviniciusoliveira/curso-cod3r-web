const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
// __proto__ está disponível tanto no node quanto no browser
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(ferrari.__proto__ === volvo.__proto__)
console.log(Object.prototype.__proto__ === null)

// prototype é um atributo para funções
// __proto__ é um atributo para objetos

function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)
