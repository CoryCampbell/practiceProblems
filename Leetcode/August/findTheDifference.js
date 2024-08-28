var findTheDifference = function (s, t) {
  const m = new Map();
  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (m.has(char)) {
      m.set(char, m.get(char) + 1);
    } else {
      m.set(char, 1);
    }
  }
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (m.has(char) && m.get(char) > 1) {
      m.set(char, m.get(char) - 1);
    } else if (m.has(char) && m.get(char) === 1) {
      m.delete(char);
    } else {
      return char;
    }
  }
  const res = m.keys();
  return res.next().value;
};
