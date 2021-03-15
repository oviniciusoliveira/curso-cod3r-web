// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto (nome, preco, desc) {
    this.nome = nome // Atributo público
    
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const produto1 = new Produto('Caneta', 7.99, 0.15)
const produto2 = new Produto('Notebook', 2999.98, 0.25)
console.log(produto1.getPrecoComDesconto(), produto2.getPrecoComDesconto())

/* A função construtora pode ser entendida como um Objeto. Mas construída manualmente */

// Função Factory
function criarFuncionario (nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const funcionario1 = criarFuncionario('João', 7980, 4)
const funcionario2 = criarFuncionario('Maria', 11400, 1)
console.log(funcionario1.getSalario(), funcionario2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna Objeto:
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
