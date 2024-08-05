var isUgly = function (n) {
  if (n <= 0) return false;

  if (n <= 5) return true;

  for (let divider of [2, 3, 5]) {
    if (n % divider === 0) {
      return isUgly(n / divider);
    }
  }

  return false;
};
