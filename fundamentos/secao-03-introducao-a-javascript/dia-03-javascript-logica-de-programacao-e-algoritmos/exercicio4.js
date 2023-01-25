let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let imprime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      imprime = false;
    }
  }
  if (imprime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);