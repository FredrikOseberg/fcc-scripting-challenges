function addTogether() {
	debugger;
   if (arguments.length === 2) {
	let numOne = arguments[0], numTwo = arguments[1];
	if (typeof numOne !== 'number' || typeof numTwo !== 'number') { 
		return undefined;
	}
     return numOne + numTwo;
   } else if (arguments.length === 1) {
   	let numOne = arguments[0];
	if (typeof numOne !== 'number') { 
		return undefined;
	}
     return function(x) {
	   if (typeof arguments[0] !== 'number') { return undefined; }
       return numOne + x;
     }
   }
}

// const added = addTogether(2)(3);

// console.log(added);
// addTogether(2,3);
addTogether(2)([3])