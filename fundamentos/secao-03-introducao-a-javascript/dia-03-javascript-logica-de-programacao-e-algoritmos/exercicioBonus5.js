let n = 5;
let simbolo = '*';
let linha = '';

let imprima = (n + 1) / 2;
let esquerda = imprima;
let direita = imprima;

for (let lineIndex = 0; lineIndex <= imprima
; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > esquerda && columnIndex < direita) {
      linha = linha + simbolo;
    } else {
      linha = linha + ' ';
    }
  }
  console.log(linha);
  linha = '';
  direita += 1;
  esquerda -= 1
};
