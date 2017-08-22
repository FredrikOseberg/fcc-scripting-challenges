function diffArray(arr1, arr2) {
  var newArr = [];

  newArr = arr1.filter(item => {
  	return arr2.indexOf(item) === -1;
  }).concat(arr2.filter(item => {
  	return arr1.indexOf(item) === -1;
  }));

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);