
function findElement(arr, func) {
  var num;

  for (let i = 0; i < arr.length; i++) {
  	const passedTest = func(arr[i]);
  	if (passedTest === true) {
  		num = arr[i];
  		break;
  	}
  }


  return num;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });