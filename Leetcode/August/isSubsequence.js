var isSubsequence = function (s, t) {
  let seqIdx = 0;

  for (const num of t) {
    if (seqIdx === s.length) break;
    if (num === s[seqIdx]) seqIdx++;
  }

  return seqIdx === s.length;
};
