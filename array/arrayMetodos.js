const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o último elemento do array !
console.log(pilotos)

pilotos.push('Verstappen') // adiciona um elemento no final do array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um elemento no inicio do array
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // gera um NOVO array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // o índice do ultimo parâmetro não está incluso
console.log(algunsPilotos2)

