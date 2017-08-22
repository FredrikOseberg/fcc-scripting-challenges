function dropElements(arr, func) {
  let tempArr = [...arr];
   
  for (let i = 0; i < tempArr.length; i++) {
	  	const passedTest = func(tempArr[i]);
	  	if (passedTest === false) {
	  		arr.shift();
	  	} else {
	  		break;
	  	}
  }


  return arr;
}

// dropElements([1, 2, 3], function(n) {return n < 3; });
dropElements([1, 2, 3, 4], function(n) {return n >= 3;})