var longestPalindrome = function (s) {
  if (s.length < 2) return s.length;

  const chars = new Map();
  let middle = false;
  let count = 0;

  s.split("").forEach((char) => {
    if (chars.has(char)) {
      chars.set(char, chars.get(char) + 1);
    } else {
      chars.set(char, 1);
    }
  });

  const iter1 = chars.values();

  for (let i = 0; i < chars.size; i++) {
    let curr = iter1.next().value;

    if (curr % 2 !== 0 && middle === false) {
      middle = true;
      count += curr;
    } else if (curr % 2 !== 0 && middle === true) {
      count += curr - 1;
    } else {
      count += curr;
    }
  }

  return count;
};
