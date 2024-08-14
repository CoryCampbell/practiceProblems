var countBits = function (n) {
  let ans = [0];
  let binary = [0];

  for (let i = 1; i <= n; i++) {
    if (!binary.includes(0)) {
      binary.unshift(1);
      for (let i = binary.length - 1; i >= 1; i--) {
        binary[i] = 0;
      }
    } else {
      for (let i = binary.length - 1; i >= 0; i--) {
        let curr = binary[i];

        if (curr === 0) {
          binary[i] = 1;
          break;
        } else {
          binary[i] = 0;
        }
      }
    }

    let count = 0;

    binary.forEach((num) => {
      if (num === 1) count++;
    });

    ans.push(count);
  }

  return ans;
};
