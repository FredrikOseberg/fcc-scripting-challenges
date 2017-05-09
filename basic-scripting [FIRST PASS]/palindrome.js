PALINDROME
function palindrome(str) {
 
  str = str.replace(/\W*_*/g, "").toLowerCase();
  var reversed = str.split("").reverse().join("");

  return str === reversed ? true : false;
}


palindrome("eyeforofeye");