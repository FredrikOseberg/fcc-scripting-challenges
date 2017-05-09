function getIndexToIns(arr, num) {
  var itemIndex;

  arr = arr.sort(function(a, b) {
  	return a - b;
  });
 

  for (let i = 0; i < arr.length; i++) {
  	if (i === 0 && num === arr[i]) {
  		return 0;
  	}

  	if (num > arr[i]) {
  		itemIndex = i + 1;
  	} else if (num === arr[i]) {
  		itemIndex = i;
  	}
  }

  return itemIndex;
}

getIndexToIns([40, 60], 50);
getIndexToIns([10, 20, 30, 40, 50], 35);
getIndexToIns([3, 10, 5], 3);
getIndexToIns([10, 20, 30, 40, 50], 30);
getIndexToIns([3, 10, 5], 3);