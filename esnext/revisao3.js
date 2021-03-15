// ES8: Object.values/Object.entries
const objeto = { a: 1, b: 2, c: 3 }
console.log(Object.keys(objeto))
console.log(Object.values(objeto))
console.log(Object.entries(objeto))

// Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Oi gente!'
    }
}
// Ao inves de
const pessoaOld = {
    nome: nome,
    ola: function() {
        return 'Oi gente velha!'
    }
}

console.log(pessoa.nome, pessoa.ola())
console.log(pessoaOld.nome, pessoaOld.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())
