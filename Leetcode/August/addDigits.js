var addDigits = function (num) {
  //if our number is zero then return zero
  if (num === 0) return 0;
  //if our num modulo 9 is zero then we can return 9
  else if (num % 9 === 0) return 9;
  //otherwise we can return the result of num modulo 9, giving us the final addition of all indexes added together
  else return num % 9;
};
