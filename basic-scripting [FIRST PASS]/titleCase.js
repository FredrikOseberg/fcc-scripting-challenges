function titleCase(str) {

  strings = str.toLowerCase().split(" ");
  for (var i = 0; i < strings.length; i++) {
  	strings[i] = strings[i].split("");
  	for (var j = 0; j < strings[i].length; j++) {
  		if (j === 0) {
  			strings[i][j] = strings[i][j].toUpperCase();
  		} else {
  			strings[i][j] = strings[i][j].toLowerCase();
  		}
  		if (j === strings[i].length - 1) {
  			strings[i] = strings[i].join("");
  		}
  	}
  }
  return strings = strings.join(" ");
}

titleCase("I'm a little tea pot");