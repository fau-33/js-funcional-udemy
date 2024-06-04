const nums = [1, 2, 3, 4, 5];
const dobro = (n, i, a) => n * 2 + i + a.length;
console.log(nums.map(dobro));

const nome = ["Ana", "Bia", "Gui", "Lia", "Rafa"];
const primeiraLetra = (texto) => texto[0];
const letras = nome.map(primeiraLetra);
console.log(nome, letras);

const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

// função pra pegar o nome dos produtos
const getNome = (item) => item.nome;
const nomes = carrinho.map(getNome);
console.log(nomes);

// função pra pegar a quantidade dos produtos multiplicado pelo preço
const getTotal = (item) => item.qtde * item.preco;
const totais = carrinho.map(getTotal);
console.log(totais);

Array.prototype.meuMap = function (fn) {
  const novoArray = [];
  for (let i = 0; i < this.length; i++) {
    novoArray.push(fn(this[i], i, this));
  }
  return novoArray;
};
