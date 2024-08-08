var canWinNim = function (n) {
  //me first
  //pull 1, 2, or 3
  //last stone wins
  //two turns = 2-6 stones
  //you can win if you end up with 1-3 left on your turn

  /*
        1   true
        2   true
        3   true
        4   false
        5   true
        6   true
        7   true
        8   false
        9   true
        10  true
        11  true
        12  false
        13
        14
        15
        16
        17
        18
        19
        20
    */
  return n % 4 === 0 ? false : true;
};
