const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react) // errado
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () { }, 'função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))

console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(345, 'b')
console.log(chavesVariadas)
