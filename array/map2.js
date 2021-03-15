const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

// Retornar um array com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

console.log(carrinho.map(paraObjeto))

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)

const precoTotal = resultado.reduce((total, preco) => total + preco)
console.log(`Soma dos preços: ${precoTotal}`)