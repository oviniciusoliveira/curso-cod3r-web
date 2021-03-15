let valor // não inicializado
console.log(valor)

valor = null
console.log(valor)

// preferir o uso de null para 'zerar' uma variável referência

//console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço é diferente de grátis
console.log(!!produto.preco)
console.log(produto)
