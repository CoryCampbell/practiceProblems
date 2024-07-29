var isPowerOfTwo = function (n) {
  return n > 0 && (n & (n - 1)) === 0;
};

//using bitwise AND operation we can compare values which only returns zero when its power of two
//1000 & 0111 = 0
