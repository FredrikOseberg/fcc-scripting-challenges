function sumAll(arr) {
  var lower = 0, higher = 0, total = 0;
  for (let i = 0; i < arr.length; i++) {
  	if (i === 0) {
  		lower = arr[i];
  		higher = arr[i];
  	} else {
	  	if (arr[i] > higher) {
	  		higher = arr[i];
	  	} else if (arr[i] <= lower) {
	  		lower = arr[i];
	  	}
  	}
  }
  console.log(lower, higher);
  for(let i = lower; i <= higher; i++) {
  	total += i;
  }
  console.log(total);
  return total;
}

// sumAll([1, 4]);
// sumAll([4, 1]);
sumAll([5, 10])