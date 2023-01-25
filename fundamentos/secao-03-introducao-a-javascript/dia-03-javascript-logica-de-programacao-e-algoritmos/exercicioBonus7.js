let divisor = 1;
let numero = 69;

for (let number = 2; number <= numero; number += 1) {
  if (numero % number === 0) divisor += 1;
}

if (divisor === 2) console.log(numero + ' é primo');
else console.log(numero + ' não é primo');