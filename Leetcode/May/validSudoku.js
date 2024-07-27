var isValidSudoku = function(board) {
    let valid = true;
    //check rows
    for (let i = 0; i < board.length; i++) {
        let currRow = board[i];

        for (let j = 0; j < board.length; j++) {
            let one = currRow[j];

            for (let k = j + 1; k < board.length; k++) {
                let two = currRow[k];

                if (one === two && one !== ".") valid = false;
            }
        }
    }

    //check cols
    for (let i = 0; i < board.length; i++) {

        for (let j = 0; j < board.length; j++) {
            let one = board[j][i];

            for (let k = j + 1; k < board.length; k++) {
                let two = board[k][i];

                if (one === two && one !== ".") valid = false;
            }
        }
    }

    //check square
    // this will be used to skip to the next start of rows for next square
    for (let i = 0; i < board.length; i += 3) {
        let square = [];

        //this skips our index up to the start of the next square based on column
        for (let j = 0; j < board.length; j += 3) {

            //now we need to loop again and populate our squares
            //this loop catches the first three rows
            for (let row = i; row < i + 3; row++) {

                //this loop catches the first three indexes
                for (let col = j; col < j + 3; col++) {
                    square.push(board[row][col]);
                }
            }
        let allNumsUsed = new Set();

        square.forEach(position => {

            if (allNumsUsed.has(position) && position !== ".") {
                valid = false;
            }
            else {
            allNumsUsed.add(position);
            }

        })

        allNumsUsed = new Set();
        square = [];
        }
    }

    return valid;
};
