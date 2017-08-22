function steamrollArray(arr) {
  // I'm a steamroller, baby
  arr.forEach(function spread(item, index) {
  	if (Array.isArray(item)) {
  		if (item.length > 1) {
  			let newArr = [...item];
  			arr.splice(index, item.length);
  			arr = arr.concat(newArr)
  		} else {
			let [number] = [...item];
		  	arr[index] = number;
  		}
	  }
  });

  arr.forEach(function (item) {
  	if (Array.isArray(item)) {
  		steamrollArray(arr);
  	}
  });
  
  let result = [];

  arr.forEach(item => {
  	if (item !== undefined) {
  		result.push(item);
  	}
  });
  console.log(result);
  return result;
}

// steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([1, [], [3, [[4]]]])
