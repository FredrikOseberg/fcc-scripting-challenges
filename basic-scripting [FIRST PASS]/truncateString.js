function truncateString(str, num) {
  if (num >= str.length) {
  	console.log(str);		
  	return str;
  }
  if (num <= 3) {
  	str = str.slice(0, num);
  	str = str.concat('...');
  } else {
  	str = str.slice(0, (num - 3))
  	str = str.concat('...');
  }
  console.log(str);
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);