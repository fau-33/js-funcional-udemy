function gerarNumeroPor(min, max, numerosProibidos) {
  if (min > max) {
    [min, max] = [max, min];
  }

  return new Promise((resolve, reject) => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator) + min;
    if (numerosProibidos.includes(aleatorio)) {
      reject("Número repetido!");
    } else {
      resolve(aleatorio);
    }
  });
}

async function gerarMegaSena(qtdNumeros, tentativas = 1) {
  try {
    const numeros = [];
    for (let _ of Array(qtdNumeros).fill()) {
      numeros.push(await gerarNumeroPor(1, 60, numeros));
    }
    return numeros;
  } catch (error) {
    if (tentativas > 10) {
      throw "Não deu certo!";
    } else {
      return gerarMegaSena(qtdNumeros, tentativas + 1);
    }
  }
}

gerarMegaSena(15).then(console.log).catch(console.log);
