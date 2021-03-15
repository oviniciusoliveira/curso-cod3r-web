// Cadeia de protótipos (prototype chain)
Object.prototype.atributo0 = '0' // EVITAR este tipo de atribuição
const avo = { atributo1: "A" }
const pai = { __proto__: avo, atributo2: "B", atributo3: '3' }
const filho = { __proto__: pai, atributo3: "C" }

console.log(filho.atributo3, filho.atributo2, filho.atributo1, filho.atributo0)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return (`${this.velAtual}Km/h de ${this.velMax}Km/h`)
    }
}

// velMax -> shadowing : 'sombrear' variaveis de escopo mais abrangentes (hierarquia acima)
const ferrari = {
    modelo: 'F40',
    velMax: 324
}

// super -> referencia ao seu protótipo
// assim como o this referencia ao objeto atual
const volvo = {
    modelo: 'V40',
    status() {
        return (`${this.modelo}: ${super.status()}`)
    }
}

// Estabelecendo uma relação de protótipo
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

// Por padrão, o objeto impresso apresenta apenas seu atributos declarados
// Mas suas referências do protótipo estão disponíveis
console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())