class Pessoa {
    constructor(nome) {
        this.nome = nome // Tornou o 'nome' público
    }

    falar() {
     // console.log(`Meu nome é ${nome}`) // Erro!
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Vinícius')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()