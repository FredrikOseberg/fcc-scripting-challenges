function fearNotLetter(str) {
  let uniCodeArr = [];
  let comparison; let charCode;

  str = str.split("");

  str.forEach(item => {
  	uniCodeArr.push(item.charCodeAt());
  });

  comparison = uniCodeArr[0];
  uniCodeArr.forEach((item, index) => {
  	if (comparison !== item) {
  		return charCode = comparison;
  	}

  	comparison++;
  });


  if (!charCode) {
  	return undefined;
  }

  str = String.fromCharCode(charCode);
  return str;
}


// fearNotLetter("abce");
// fearNotLetter("abcdefghjklmno");
fearNotLetter("bcd");