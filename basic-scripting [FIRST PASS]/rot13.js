function rot13(str) {
  var arr = str.split("");
  var charCode;
  var charCodes = [];
  console.log(33 % 26);

  for (let i = 0; i < arr.length; i++) {
  	if (arr[i].match(/[A-Z]/g)) {
	  	charCode = str.charCodeAt(i);
	  	if (charCode >= 65 && charCode <= 90) {
	  		charCode = ((charCode - 65 + 13) % 26) + 65;
	  		charCodes.push(String.fromCharCode(charCode));
	  	}
  	} else {
	  	charCode = str.charCodeAt(i);
  		charCodes.push(String.fromCharCode(charCode));
  	}
  }

  charCodes = charCodes.join("");

  return charCodes;
}

rot13("SERR PBQR PNZC");