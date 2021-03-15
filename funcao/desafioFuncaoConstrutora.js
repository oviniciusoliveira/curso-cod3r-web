// Transformar a classe Pessoa2 em uma função construtora

class Pessoa2 {
    constructor(nome) {
        this.nome = nome // Tornou o 'nome' público
    }

    falar() {
     // console.log(`Meu nome é ${nome}`) // Erro!
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p2 = new Pessoa2('Vinícius')
p2.falar()

function Pessoa (nome) {

    this.nome = nome // opcional. Caso remova, não terá mais acesso ao 'nome'

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }

}

const p1 = new Pessoa('Belchior')
p1.falar()

// By Myself: Versão em Factory
const Pessoa3 = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p3 = Pessoa3('Alex')
p3.falar()
