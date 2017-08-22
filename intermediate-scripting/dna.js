function pairElement(str) {
  let strArr = str.split("");
  let result = [];

  strArr.forEach(item => {
  	if (item === 'A') {
  		result.push(['A', 'T']);
  	} else if (item === 'T') {
  		result.push(['T', 'A']);
  	} else if (item === 'C') {
  		result.push(['C', 'G']);
  	} else if (item === 'G') {
  		result.push(['G', 'C']);
  	}
  });

  return result;
}


pairElement("GCG");