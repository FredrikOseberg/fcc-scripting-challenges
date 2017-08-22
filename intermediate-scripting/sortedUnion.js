function uniteUnique(arr) {
  let result = [];
  let args = Array.prototype.slice.call(arguments);
  
  args.forEach(item => {
  	item.forEach(number => {
  		if (result.indexOf(number) === -1) {
  			result.push(number);
  		}
  	});
  });

  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
uniteUnique([1, 2, 3], [5, 2, 1]);