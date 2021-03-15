//Spread (Comparação Paralela)
const filhas = ['Wanessa', 'Cibalena']
const filhos = [ 'Marcos', 'Juan']
const todos = [...filhas, ...filhos, 'Fulano']
console.log(todos, filhas, filhos)

//Concat
const filhas2 = ['Valeskah', 'Cibalena']
const filhos2 = ['Uoxiton', 'Uesclei']
const todos2 = filhas2.concat(filhos2, 'Fulano')
console.log(todos2, filhas2, filhos2)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))