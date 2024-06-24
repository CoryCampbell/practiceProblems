var spiralOrder = function(matrix) {
    let output = [];

    while (matrix.length > 0 && matrix[0][0] !== undefined) {
        //grab first row
        output.push(...matrix.shift());
        //grab right side of matrix
        matrix.forEach(row => output.push(row.pop()));
        //flip the matrix over to simplify solution
        matrix.reverse().map(row => row.reverse());
    }

    return output;
};
