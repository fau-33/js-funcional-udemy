function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      consol.log("Teste de erro!");
      if (Math.random() < chanceErro) {
        reject("Ocorreu um erro!");
      } else {
        resolve(valor);
      }
    } catch (err) {
      reject(err);
    }
  });
}

funcionarOuNao("Testando...", 0.5)
  .then((v) => console.log(`Valor: ${v}`))
  .then(
    (v) => console.log(v),
    (err) => console.log(`Erro Esp.: ${err}`)
  )
  .then(() => console.log("Quase Fim!"))
  .catch((err) => console.log(`Erro: ${err}`))
  .then(() => console.log("Fim!"));
