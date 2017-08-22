function sumFibs(num) {
  let result;
  let firstNumber; let secondNumber;
  let fibArr = [];

  result = 1;
  firstNumber = 1;
  secondNumber = 0;


  while (result <= num) {
  	if (result % 2 !== 0) {
  		fibArr.push(result);
  	}
  	result = firstNumber + secondNumber;
  	secondNumber = firstNumber;
  	firstNumber = result;
  }

  result = 0;

  fibArr.forEach(item => {
  	result += Number(item);
  })

  return result;
}

sumFibs(4);
sumFibs(1000);
sumFibs(75024);
sumFibs(75025);