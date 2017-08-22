function smallestCommons(arr) {
   var result = [];
   var commonMultiples = [], 
   var numberOne = arr[0], numberTwo = arr[1];

   if (numberOne > numberTwo) {
      numberOne = arr[1];
      numberTwo = arr[0];
   }

   for (let i = 1; i < 1000000; i++) {
      let number = numberTwo * i; 
      if (number % numberTwo === 0 && number % numberOne === 0) {
        commonMultiples.push(number);
      }
   }

  var common = commonMultiples.forEach(function checkSmallestCommonDividable(commonMultiple) {
    let count = 0;
    let commonlyDividable = [];
    for (let k = numberOne; k < numberTwo; k++) {
      count += 1;
      if (commonMultiple % k === 0) {
        commonlyDividable.push(k)
      }
    }

    if (commonlyDividable.length === count) { result.push(commonMultiple); }
  });
   return result[0];
}


smallestCommons([1,13]);