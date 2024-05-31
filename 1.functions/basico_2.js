function bomDia() {
  console.log("Bom dia!");
}

const boaTarde = function () {
  console.log("Boa tarde!");
};

// 1) Passar uma função como parâmetro para outra função
function executarQualquerCoisa(fn) {
  if (typeof fn === "function") {
    fn();
  }
}

executarQualquerCoisa(3);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);

// Retornar uma função a partir de uma outra função
function potencia(base) {
  return function (exp) {
    return Math.pow(base, exp);
  };
}

const potencia2 = potencia(2);
console.log(potencia2(8));

const pot34 = potencia(3)(4);
console.log(pot34);

// somar(3)(4)(5)
function somar(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const somarAB = somar(3)(4);
console.log(somarAB(13));
console.log(somar(13)(20)(30));

// fn -> 3 * 7
// fn -> 3 + 7
// fn -> 3 - 7
// calcular(3)(7)(fn)
function calcular(x) {
  return function (y) {
    return function (fn) {
      return fn(x, y);
    };
  };
}

const multiplicar = (a, b) => a * b;
const somar1 = (a, b) => a + b;
const subtrair = (a, b) => a - b;

console.log(calcular(10)(5)(multiplicar));
console.log(calcular(10)(5)(somar1));
console.log(calcular(10)(5)(subtrair));
