var guessNumber = function (n, left = 1) {
  let start = 1;
  let end = n;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (guess(mid) == 0) {
      return mid;
    } else if (guess(mid) === 1) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
};
