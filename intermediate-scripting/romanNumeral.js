// Not happy with this implementation, strive to find a better one.

function convertToRoman(num) {
 var numArray = num.toString().split("");
 var numberHolder = {};
 var count = 1;
 var result = [];

 for (let i = numArray.length - 1; i >= 0; i--) {
 	if (count === 1) {
 		numberHolder.ones = numArray[i] * 1;
 	} else if (count === 2) {
 		numberHolder.tens = numArray[i] * 10;
 	} else if (count === 3) {
 		numberHolder.hundreds = numArray[i] * 100;
 	} else if (count === 4) {
 		numberHolder.thousands = numArray[i] * 1000;
 	}
 	count++;
 }

 for (key in numberHolder) {
 	console.log(numberHolder[key]);
 	switch (numberHolder[key]) {
 		case 1:
 			result.unshift('I');
 			break;
 		case 2:
 			result.unshift('II');
 			break;
		case 3:
			result.unshift('III');
			break;
		case 4:
			result.unshift('IV');
			break;
		case 5:
			result.unshift('V');
			break;
		case 6:
			result.unshift('VI');
			break;
		case 7:
			result.unshift('VII');
			break;
		case 8:
			result.unshift('VIII');
			break;
		case 9:
			result.unshift('IX');
			break;
		case 10:
			result.unshift('X');
			break;
		case 20:
			result.unshift('XX');
			break;
		case 30:
			result.unshift('XXX');
			break;
		case 40:
			result.unshift('XL');
			break;
		case 50:
			result.unshift('L');
			break;
		case 60:
			result.unshift('LX');
			break;
		case 70:
			result.unshift('LXX');
			break;
		case 80:
			result.unshift('LXXX');
			break;
		case 90:
			result.unshift('XC');
			break;
		case 100:
			result.unshift('C');
			break;
		case 200:
			result.unshift('CC');
			break;
		case 300:
			result.unshift('CCC');
			break;
		case 400:
			result.unshift('CD');
			break;
		case 500:
			result.unshift('D');
			break;
		case 600:
			result.unshift('DC');
			break;
		case 700:
			result.unshift('DCC');
			break;
		case 800:
			result.unshift('DCCC');
			break;
		case 900:
			result.unshift('CM');
			break;
		case 1000:
			result.unshift('M')
			break;
		case 2000:
			result.unshift('MM');
			break;
		case 3000:
			result.unshift('MMM');
 	}
 }
 result = result.join("");

 console.log(result);

}

// convertToRoman(36);
// convertToRoman(3);
// convertToRoman(12);
// convertToRoman(99);
// convertToRoman(891);
// convertToRoman(1000);
// convertToRoman(1004);
convertToRoman(2014);
// convertToRoman(3999);
