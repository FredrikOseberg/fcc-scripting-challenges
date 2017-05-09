function mutation(arr) {
  var newArr;
  arr[0] = arr[0].toLowerCase();
  for (var i = 1; i < arr.length; i++) {
 	newArr = arr[i].toLowerCase().split("");
 	console.log(newArr);
 	newArr = newArr.filter((item) => {
 		if (arr[0].indexOf(item) >= 0) {
 			return item;
 		}
 	});
  }

  return newArr.length === arr[1].length ? true : false;
}

mutation(["hello", "hey"]);
mutation(["hello", "Hello"]);
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
mutation(["floor", "for"]);
mutation(["hello", "neo"]);