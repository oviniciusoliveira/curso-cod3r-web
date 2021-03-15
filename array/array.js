console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Belchior')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana', 'Rodrigo', 'Felipe', 'Carla', 'André']
// primeiro argumento: altura do indice a ser trabalhado
// segundo elemento: até que indice excluir valores, (0 = não excluir ngm)
// outros parametros: novos elementos a serem adicionados no indice
aprovados.splice(1, 2,  'Elemento1', 'Elemento2', 'Elemento3')
console.log(aprovados)