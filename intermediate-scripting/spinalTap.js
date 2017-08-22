function spinalCase(str) {
  str = str.split("");
  var result = [];
  
  str.forEach((character, index) => {
  	if (character === character.toUpperCase()) {
  		if (str[index - 1] !== " " && index !== 0 && character !== '-' && character !== '_' && str[index - 1] !== '_') {
	  		result.push(" ");
        if (character !== " ") {
          result.push(character.toLowerCase());
        }
  		} else {
        result.push(character.toLowerCase());
      }
  	} else {
  		result.push(character);
  	}
  });

  str = result.join("");
  str = str.replace(/[\s_-]/g, '-');
  return str;
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things")


