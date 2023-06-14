const checkPrime = (num: number) : boolean => {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const listPrimes = (num: number) : number[] => {
  const listOfPrimes = [];
  for (let i = Math.round(num / 2); i >= 2; i--) {
    if (checkPrime(i)) {
      listOfPrimes.unshift(i);
    }
  }
  return listOfPrimes;
};

const primeFactorization = (num : number) : number[] | String => {
  const primeList = listPrimes(num);
  const result = [];
  if (num < 2) {
    return 'Invalid number';
  }

  if (checkPrime(num)) {
    return [num];
  }

  for (let i = 0; i < primeList.length; i++) {
    while (num % primeList[i] === 0) {
      result.push(primeList[i]);
      num /= primeList[i];
    }
  }
  return result;
};

console.log(primeFactorization(0));
console.log(primeFactorization(8));
console.log(primeFactorization(9));
console.log(primeFactorization(10));
console.log(primeFactorization(99));
