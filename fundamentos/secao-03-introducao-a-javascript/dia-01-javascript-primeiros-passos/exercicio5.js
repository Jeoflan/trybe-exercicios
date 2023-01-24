const anguloA = 100;
const anguloB = 40;
const anguloC = 40;

let somaDosAngulos = anguloA + anguloB + anguloC;

let anguloPositivo = anguloA > 0 && anguloB > 0 && anguloC > 0;

if(anguloPositivo){
  if (somaDosAngulos === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}