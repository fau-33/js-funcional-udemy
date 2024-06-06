const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99, fragil: true },
  { nome: "Impressora", qtde: 1, preco: 649.5, fragil: true },
  { nome: "Caderno", qtde: 4, preco: 27.1, fragil: false },
  { nome: "Lapis", qtde: 3, preco: 5.82, fragil: false },
  { nome: "Tesoura", qtde: 1, preco: 19.2, fragil: true },
];

// filter, map, reduce
Array.prototype.meuReduce = function (fn, inicial) {
  let acc = inicial;
  for (let i = 0; i < this.length; i++) {
    if (!acc && i === 0) {
      acc = this[i];
      continue;
    }
    acc = fn(acc, this[i], i, this);
  }
  return acc;
};

// 1. fragil: true
const isFragil = (item) => item.fragil;
const itensFragil = carrinho.filter(isFragil);
//console.log(itensFragil);

// 2. qtde * preco -> total
const getTotal = (item) => item.qtde * item.preco;
const totais = carrinho.map(getTotal);
//console.log(totais);

// 3. média totais
const somar = (acc, el) => acc + el;
const media = totais.meuReduce(somar) / totais.length;
console.log(media);
