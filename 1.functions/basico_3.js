// arrow function
const felizSaoJoao = () => console.log("Feliz São João!");
felizSaoJoao();

const saudacao = (nome) => `Fala ${nome}, blz!?!`;
//"Fala " + nome + ", blz!?!";
console.log(saudacao("Maria"));

const somar = (...numeros) => {
  let total = 0;
  for (let n of numeros) {
    total += n;
  }
  return total;
};

console.log(somar(1, 2, 3));
console.log(somar(1, 2, 3, 4, 5, 6));
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// function da potencia transformar em arrow function
const potencia = (base) => (exp) => Math.pow(base, exp);
console.log(potencia(2)(10));

// this
Array.prototype.ultimo = function () {
  console.log(this[this.length - 1]);
};

Array.prototype.primeiro = function () {
  console.log(this[0]);
};

const numeros = [-333, 1, 2, 3, 4, 5, 500];
numeros.ultimo();
numeros.primeiro();
