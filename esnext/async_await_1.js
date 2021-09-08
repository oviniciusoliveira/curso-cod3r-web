function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
        resolve();
    }, tempo);
});
}

// esperarPor(3000)
//     .then(() => console.log("Promise 1 Executada"))
//     .then(esperarPor)
//     .then(() => console.log("Promise 2 Executada"))
//     .then(esperarPor)
//     .then(() => console.log("Promise 3 Executada"))

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000);
    })
}

async function retornarValorRapido() {
    return 20
}
async function executar() {
    let valor = await retornarValor();

    await esperarPor(2000);
    console.log(`Async/Await ${valor}...`)

    await esperarPor(2000);
    console.log(`Async/Await ${valor + 1}...`)

    await esperarPor(2000);
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

// Não funciona armazenar retorno de promise em variável
// const valor = executar()
// console.log(valor)

// Solução:
executar().then(console.log)

// Solução 2:

async function valorPromise() {
    const valor = await executar();
    console.log(valor);
}

valorPromise();

retornarValorRapido().then(console.log);