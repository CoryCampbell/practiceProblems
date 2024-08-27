var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;

  const m = new Map();

  for (let i = 0; i < magazine.length; i++) {
    const char = magazine[i];

    if (m.has(char)) {
      m.set(char, m.get(char) + 1);
    } else {
      m.set(char, 1);
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const char = ransomNote[i];

    if (m.has(char) && m.get(char) > 0) {
      m.set(char, m.get(char) - 1);
    } else return false;
  }

  return true;
};
