function myReplace(str, before, after) {
  str = str.split(" ");
  str.forEach((word, index) => {
  	if (word === before) {
  		let isFirstWordUppercase = /[A-Z]/.test(word[0]);
  		console.log(isFirstWordUppercase);
  		if (isFirstWordUppercase) {	
  			after = after.charAt(0).toUpperCase() + after.slice(1);
  		}
  		
  		str[index] = after;
  	}
  });
  str = str.join(" ");

  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")