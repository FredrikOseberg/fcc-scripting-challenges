 function confirmEnding(str, target) {
	var lastWord, lastWordStart;
	if (str.includes(" ")) {
		str = str.split("");
		lastWordStart = str.lastIndexOf(" ") + 1;
		lastWord = str.join("").substring(lastWordStart, undefined);
		if (lastWord.length > target.length) {
			lastWordStart = lastWord.length - target.length;
			lastWord = lastWord.substring(lastWordStart, undefined)
		}
	} else {
		lastWordStart = str.length - 1;
		lastWord = str.substring(lastWordStart, undefined);
	}
	return lastWord === target ? true : false;
}

confirmEnding("Bastian", "n");
confirmEnding("He has to give me a new name", "name");
confirmEnding("Open sesame", "same");
