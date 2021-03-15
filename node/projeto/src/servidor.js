const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')


/* app.get('/produtos', (request, response, next) => {
    console.log('Middleware 1...')
    next()
}) */

// use : é atendido para todas as requisições
/* app.use((request, response, next) => {
    console.log('Middlewarssre 1...')
    next()
}) */

// para todas as urls
app.use(bodyParser.urlencoded( {extended: true }))

// O metodo send automaticamente converte o objeto para JSON
app.get('/produtos', (request, response, next) => {
    response.send(bancoDeDados.getProdutos())
}) 
app.get('/produtos/:id', (request, response, next) => {
    response.send(bancoDeDados.getProduto(request.params.id))
})
app.post('/produtos', (request, response, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: request.body.nome,
        preco: request.body.preco
    })
    response.send(produto) // Converte em JSON
})
app.put('/produtos/:id', (request, response, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: request.params.id,
        nome: request.body.nome,
        preco: request.body.preco
    })
    response.send(produto) // Converte em JSON
})
app.delete('/produtos/:id', (request, response, next) => {
    const produto = bancoDeDados.excluirProduto(request.params.id)
    response.send(produto) // Converte em JSON
})
app.listen(porta, () => {
    console.log(`Servidor está executando na porta:${porta}.`)
})
