FACTORIALIZE 5!

function factorialize(num) {
  var limit = num;
  var numbers = [];

  for (var i = 1; i <= limit; i++) {
  	numbers.push(i);
  }

  num = numbers.reduce((prev, next) => {
  	return prev * next;
  });
  
  return num;
}

factorialize(5);