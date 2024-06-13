// Função construtora
function produto(nome, preco, desc = 0.5) {
  this.nome = nome;
  this.preco = preco;
  this.desc = desc;

  this.precoFinal = function () {
    return this.preco * (1 - this.desc);
  };
}

const p1 = new produto("caneta", 10);
console.log(p1.nome);
console.log(p1.preco);
console.log(p1.precoFinal());

const p2 = new produto("notebook", 3000);
console.log(p2.preco);
console.log(p2.precoFinal());
