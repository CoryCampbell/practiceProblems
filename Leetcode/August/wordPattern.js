var wordPattern = function (pattern, s) {
  const words = s.split(" ");
  const charsToWords = new Map();
  const wordsToChars = new Map();

  let i = 0;

  for (const word of words) {
    if (i === pattern.length) {
      return false;
    }

    const currentChar = pattern[i];

    if (!charsToWords.has(currentChar) && !wordsToChars.has(word)) {
      charsToWords.set(currentChar, word);
      wordsToChars.set(word, currentChar);
    } else {
      if (charsToWords.get(currentChar) !== word || wordsToChars.get(word) !== currentChar) {
        return false;
      }
    }
    ++i;
  }

  return i === pattern.length;
};
