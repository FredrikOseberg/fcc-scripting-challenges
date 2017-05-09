function findLongestWord(str) {
	var highestLength, result;
	var strings = str.split(" ");
	for (var i = 0; i < strings.length; i++) {
		if (i === 0) highestLength = i;
		if (strings[i].length > highestLength) {
			result = strings[i];
			highestLength = strings[i].length;
		}
	}
	
  return result.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
