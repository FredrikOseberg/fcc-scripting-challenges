function sumPrimes(num) {
  let primeArr = [];
  let result = 0;
  
  function isPrime(number) {
	    if (number === 1) return false;
	    if (number === 2) return true;

	    for (var i = 2; i < number; i++) {
	    	if (number % i === 0) {
	    		return false;
	    	}
	    }
	    return true;
	}

  for (var i = 2; i <= num; i++) {
  	if (isPrime(i)) {
  		primeArr.push(i);
  	}
  }

  result = 0;
  primeArr.forEach(number => {
  	result += number;
  });

  return result;
}

sumPrimes(10);
sumPrimes(977);