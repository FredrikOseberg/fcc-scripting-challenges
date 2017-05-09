// Remove specified items from array

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments, 1, arguments.length);
  var newArr = [];
  var finalArr = [];
  var loopCount;
  var indexOf;

  for (let i = 0; i < args.length; i++) {
  	newArr[i] = arr.filter(item => {

  		return item === args[i];
  	});
  }


  for (let i = 0; i < newArr.length; i++) {
  	for (let j = 0; j < newArr[i].length; j++) {
  		finalArr.push(newArr[i][j]);
  	}
  }

  loopCount = arr.length;

  for (let i = 0; i < loopCount; i++) {
  	while (arr.indexOf(finalArr[i]) >= 0) {
  		indexOf = arr.indexOf(finalArr[i]);
  		arr.splice(indexOf, 1);
  	}
  }
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
destroyer([2, 3, 2, 3], 2, 3);
destroyer(["tree", "hamburger", 53], "tree", 53);