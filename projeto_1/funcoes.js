const fs = require("fs");
const path = require("path");

function lerDiretorio(caminho) {
  return new Promise((resolve, reject) => {
    try {
      let arquivos = fs.readdirSync(caminho);
      arquivos = arquivos.map((arquivo) => path.join(caminho, arquivo));
      resolve(arquivos);
    } catch (e) {
      reject(e);
    }
  });
}

function LerArquivo(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const conteudo = fs.readFileSync(caminho, { encoding: "utf-8" });
      resolve(conteudo.toString());
    } catch (e) {
      reject(e);
    }
  });
}

function lerArquivos(caminhos) {
  return Promise.all(caminhos.map((caminho) => LerArquivo(caminho)));
}

function elementosTerminadosCom(array, padraoTextual) {
  return array.filter((el) => el.endsWith(padraoTextual));
}

function removerElementosSeVazio(array) {
  return array.filter((el) => el.trim());
}

function removerElementosSeIncluir(padraoTextual, array) {
  return array.filter((el) => !el.includes(padraoTextual));
}

function removerElementosSeApenasNumeros(array) {
  return array.filter((el) => {
    const num = parseInt(el.trim());
    return isNaN(num);
  });
}

module.exports = {
  lerDiretorio,
  LerArquivo,
  lerArquivos,
  elementosTerminadosCom,
  removerElementosSeVazio,
  removerElementosSeIncluir,
  removerElementosSeApenasNumeros,
};