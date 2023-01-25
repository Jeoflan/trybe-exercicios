let n = 5;
let simbolo = '*';
let linha = '';
let posicao = n;

for (let lineIndex = 0; lineIndex <= n; lineIndex += 1) {
    for (let colunaIndex = 0; colunaIndex <= n; colunaIndex +=1){
        if (colunaIndex < posicao){
            linha = linha + ' ';
        } else {
            linha = linha + simbolo;
        }
    }
  console.log(linha);
  linha = '';
  posicao -= 1;
};
