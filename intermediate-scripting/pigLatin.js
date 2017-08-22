function translatePigLatin(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  strArr = str.split("");
  result = [];

  if (vowels.indexOf(strArr[0]) !== -1) {
  	result.push(str, 'way');
  } else {
  	for (var i = 0; i < strArr.length; i++) {
  		if (vowels.indexOf(strArr[i]) !== -1) {
  			result.unshift(str.substr(i));
			result.push('ay');
			break;
  		} else {
  			let character = strArr.slice(i, 1 + i);
			result.push(character);
  		}
  	}
  }

  result = result.join("");
  return result;
}

translatePigLatin("consonant");
translatePigLatin("algorithm");
translatePigLatin("eight");
translatePigLatin('glove');