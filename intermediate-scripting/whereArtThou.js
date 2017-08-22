function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  var sourceProps = Object.keys(source);
  var trueFlag = 0;

  // Only change code below this line
   for (let i = 0; i < collection.length; i++) {
    for (let j = 0; j < sourceProps.length; j++) {
      if (collection[i].hasOwnProperty(sourceProps[j])) {
        if (collection[i][sourceProps[j]] === source[sourceProps[j]]) {
          trueFlag += 1;
          if (trueFlag === sourceProps.length) {
            console.log(trueFlag, sourceProps.length);
            arr.push(collection[i]);
          }
        }
      }
    }
    trueFlag = 0;
  }
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 })

 