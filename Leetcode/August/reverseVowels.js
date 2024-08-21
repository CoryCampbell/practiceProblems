const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

var reverseVowels = function (s) {
  let first = 0;
  let second = s.length - 1;
  let chars = s.split("");

  while (first < second) {
    while (first < second && !vowels.includes(s[first])) {
      first++;
    }

    while (first < second && !vowels.includes(s[second])) {
      second--;
    }

    if (first < second) {
      let temp = chars[first];
      chars[first] = chars[second];
      chars[second] = temp;
      first++;
      second--;
    }
  }

  return chars.join("");
};
