function chunkArrayInGroups(arr, size) {
  var item;
  var newArr = [];
  item = arr.slice(0, size);
  for (var i = 0; i < arr.length; i += size) {
  	if (i === 0) {
  		item = arr.slice(0, size);
  		newArr.push(item);
  	} else {
  		console.log(i);
  		item = arr.slice(i, i + size);
  		newArr.push(item);
  	}
  }
  return newArr;
  }

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
