class TicTacToe {
    constructor() {
        let row = [null, null, null]
        this.board = [row.slice(), row.slice(), row.slice()];
        this.winner = null;
    }
 
    //place an x 
    placeX(row, column) {
        if (this.board[row][column] === null) {
            this.board[row][column] = 'X';
        }
    }

    //place an o
    placeO(row, column) {
        if (this.board[row][column] === null) {
            this.board[row][column] = 'O';
        }
    }

    //checkwinners
    checkWinner() {
        let columns = this.checkColumns();
        let rows = this.checkRows();
        let diagonals = this.checkDiagonals();
    
        if (columns) {
            this.winner = columns;
            return columns;
        } else if (rows) {
            this.winner = rows;
            return rows;
        } else if (diagonals) {
            this.winner = diagonals;
            return diagonals;
        } else {
            return false;
        }
    }

    //check each column for a winner
    checkColumns() {
        if (this.board[0][0] === this.board[1][0] && this.board [1][0] === this.board[2][0] && this.board[0][0]) {
            return this.board[0][0];
        } else if (this.board[0][1] === this.board[1][1] && this.board[1][1] === this.board[2][1] && this.board[0][1]) {
            return this.board[0][1];
        } else if (this.board[0][2] === this.board[1][2] && this.board[1][2] === this.board[2][2] && this.board[0][2]) {
            return this.board[0][2];
        } else {
            return false;
        }
    }

    //check each row for a winner
    checkRows() {
        if (this.board[0][0] === this.board[0][1] && this.board[0][1] === this.board[0][2] && this.board[0][0]) {
            return this.board[0][0];
        } else if (this.board[1][0] === this.board[1][1] && this.board[1][1] === this.board[1][2] && this.board[1][0]) {
            return this.board[1][0];
        } else if (this.board[2][0] === this.board[2][1] && this.board[2][1] === this.board[2][2] && this.board[2][0]) {
            return this.board[2][0];
        } else {
            return false;
        }
    }

    //check each diagonal for a winner
    checkDiagonals() {
        if (this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2] && this.board[0][0]) {
            return this.board[0][0];
        } else if (this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0] && this.board[0][2]) {
            return this.board[0][2];
        } else {
            return false;
        }
    }

    //clear out the board and any previous winner
    clearBoard() {
        let row = [null, null, null]
        this.board = [row.slice(), row.slice(), row.slice()];
        this.winner = null;
    }
}