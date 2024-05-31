// function declaration
function bomDia() {
  console.log("Bom dia!");
}

bomDia();

// function expression
const boaTarde = function () {
  console.log("Boa tarde!");
};

const x = boaTarde();
console.log(x); // undefined

function somar(a = 0, b = 0) {
  return a + b;
}

let resultado = somar(3, 4);
console.log(resultado);

resultado = somar(3, 5, 5, 6, 7, 8);
console.log(resultado);

resultado = somar(3); // NaN
console.log(resultado);

resultado = somar();
console.log(resultado);
