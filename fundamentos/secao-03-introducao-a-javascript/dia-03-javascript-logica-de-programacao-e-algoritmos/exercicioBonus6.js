let n = 7;
let imprima = (n + 1) / 2;
let esquerda = imprima;
let direita = imprima;
let simbolo = '*';
for (let line = 1; line <= imprima; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == esquerda || col == direita || line == imprima) {
      outputLine += simbolo;
    } else {
      outputLine += ' ';
    }
  }
  esquerda -= 1;
  direita += 1;
  console.log(outputLine);
}