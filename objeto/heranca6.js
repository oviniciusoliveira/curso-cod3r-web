function aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new aula('Bem Vindo', 123)
const aula2 = new aula('Até Breve', 456)
console.log(aula1, aula2)

// simulando o new
function novo(funcao, ...params) {
    const objeto = {}
    objeto.__proto__ = funcao.prototype
    funcao.apply(objeto, params)
    return objeto
}

const aula3 = novo(aula, 'Bem Vindo', 123)
const aula4 = novo(aula, 'Até Breve', 456)
console.log(aula3, aula4)
