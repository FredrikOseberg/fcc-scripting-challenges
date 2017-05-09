function largestOfFour(arr) {
  var currentLargest;
  var largestNumbers = [];
  for (var i = 0; i < arr.length; i++) {
  	for (var j = 0; j < arr[i].length; j++) {
  		if (j === 0) currentLargest = arr[i][j];
  		if (arr[i][j] > currentLargest) currentLargest = arr[i][j];
  		if (j === arr[i].length - 1) largestNumbers.push(currentLargest);
  	}
  }  
  return largestNumbers;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
