var uniquePaths = function(m, n) {
  //initilaze an array to rep the top row
    let aRow = Array(n).fill(1);

    //iterate through the rest of the rows
    for (let row = 1; row < m; row++) {
      //init an array to rep the rows below the top row
        let currRow = Array(n).fill(1);

      //nested loop to iterate through the cols of each currRow
        for (let col = 1; col < n; col++) {
          //update the current index value to represent the total amount of possible combos so far
            currRow[col] = currRow[col - 1] + aRow[col];
        }
      //update the aRow to represent moving through the grid row by row
        aRow = currRow;
    }
    //return the last element of the aRow list which represents the total amount of possible paths found
    return aRow[n - 1];
};
