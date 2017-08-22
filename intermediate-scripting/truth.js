
function truthCheck(collection, pre) {
  const passedTest = collection.every(obj => {
     return obj.hasOwnProperty(pre) && !!obj[pre];
  });
  return passedTest;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
