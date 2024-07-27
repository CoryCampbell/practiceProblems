var setZeroes = function(matrix) {
  //initialize some variables to store the rows and cols that will be turned to zeroes
    let rows = [], cols = [];

    //loop through the matrix and find all the zeroes
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                rows.push(i);
                cols.push(j);
            }
        }
    }

    //loop through all of our nums in rows array, turning every num to a zero
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[rows[i]][j] = 0;
        }
    }

    //loop through all of the nums in cols array, turning every num to a zero
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < cols.length; j++) {
            matrix[i][cols[j]] = 0;
        }
    }
};
