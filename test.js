var frase = "";
var numvueltas = 0;

function procesoCodificar(frase, vueltas) {
  let matriz = [];
  let matrizFinal = [];
  let mensajeFinal = "";
  let cuenta = 0;

  for (let i = 0; i < frase.length; i++) {
    if (cuenta < frase.length) {
      matriz.push([]);
      for (let j = 0; j < vueltas; j++) {
        if (frase[cuenta]) {
          matriz[i].push(frase[cuenta]);
        } else {
          matriz[i].push(" ");
        }
        cuenta++;
      }
    }
  }

  for (let index = 0; index < matriz.length - 1; index++) {
    matrizFinal.push([]);
  }

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < vueltas; j++) {
      matrizFinal[j].push(matriz[i][j]);
    }
  }

  for (let i = 0; i < matrizFinal.length; i++) {
    for (let j = 0; j < matrizFinal[i].length; j++) {
      mensajeFinal += matrizFinal[i][j];
    }
  }

  return mensajeFinal;
}

function procesoDecodificar(frase, vueltas) {
  let matriz = [];
  let matrizFinal = [];
  let mensajeFinal = "";
  let cuenta = 0;

  for (let i = 0; i < frase.length; i++) {
    if (cuenta < frase.length) {
      matriz.push([]);
      for (let j = 0; j < frase.length / vueltas; j++) {
        if (frase[cuenta]) {
          matriz[i].push(frase[cuenta]);
        } else {
          matriz[i].push(" ");
        }
        cuenta++;
      }
    }
  }

  for (let i = 0; i < matriz[0].length; i++) {
    matrizFinal.push([]);
  }



  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length + 1; j++) {
      matrizFinal[j].push(matriz[i][j]);
    }
  }

  for (let i = 0; i < matrizFinal.length; i++) {
    for (let j = 0; j < matrizFinal[i].length; j++) {
      mensajeFinal += matrizFinal[i][j];
    }
  }

  return mensajeFinal;
}

console.log(procesoCodificar("Devoff se puso ATR", 4));
console.log(procesoDecodificar("DfesTef oRv p  osuA", 4));
