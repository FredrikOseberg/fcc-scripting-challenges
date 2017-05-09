function slasher(arr, howMany) {
  if (howMany <= 0) {
  	return arr;
  }	
  arr.splice(0, howMany);
  return arr;
}

slasher([1, 2, 3], 2);
slasher([1, 2, 3], 0);
slasher([1, 2, 3], 9)