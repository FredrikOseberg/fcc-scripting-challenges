function bouncer(arr) {
  console.log(arr.filter((item) => {
  	return item ? true : false;
  }));
}

bouncer([7, "ate", "", false, 9]);
