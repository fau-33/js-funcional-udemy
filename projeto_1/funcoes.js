const fs = require("fs");
const path = require("path");

function lerDiretorio(caminho) {
  return new Promise((resove, reject) => {
    try {
      let arquivos = fs.readdirSync(caminho);
      arquivos = arquivos.map((arquivo) => path.join(caminho, arquivo));
      resove(arquivos);
    } catch (e) {
      reject(e);
    }
  });
}

function LerArquivo(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const conteudo = fs.readlinkSync(caminho, { encoding: "utf-8" });
      resolve(conteudo.toString());
    } catch (e) {
      reject(e);
    }
  });
}

function lerArquivos(caminhos) {
  return Promise.all(caminhos.map((caminho) => lerArquivo(caminho)));
}

function elementosTerminadosCom(array, padrao) {
  return array.filter((el) => el.endsWith(padrao));
}

module.exports = {
  lerDiretorio,
  lerArquivos,
  LerArquivo,
  elementosTerminadosCom,
};
