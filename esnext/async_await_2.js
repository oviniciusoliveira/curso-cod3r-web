function gerarNumerosEntre(min, max, numerosProibidos) {
  if (min > max) [max, min] = [min, max];
  return new Promise((resolve, reject) => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator) + min;
    if (numerosProibidos.includes(aleatorio)) {
      reject(`Número repetido!`);
    } else {
      resolve(aleatorio);
    }
    resolve(aleatorio);
  });
}

async function gerarMegaSena(qtdNumeros, tentativas = 1) {
  try {
    const numeros = [];
    for (let _ of Array(qtdNumeros).fill()) {
      numeros.push(await gerarNumerosEntre(1, 60, numeros));
    }
    return numeros;
  } catch (e) {
    // throw "Que Chato!!!";
    if (tentativas > 100) {
      throw "Número máximo de tentativas atingido!";
    } else {
      return gerarMegaSena(qtdNumeros, tentativas + 1);
    }
  }
}

gerarNumerosEntre(1, 5, [1, 2, 4]).then(console.log).catch(console.log);

gerarMegaSena(25).then(console.log).catch(console.log("Erro ao gerar mega sena!"));
