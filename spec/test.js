var assert = chai.assert;

describe('Board', function() {

    it('should initialize as an array with length 3', function() {
        var game = new TicTacToe();
        assert.equal(game.board.length, 3, 'board did not have a length of three')
    });

    it('should consist of 3 arrays of length 3', function() {
        var game = new TicTacToe();
        for (var row of game.board) {
            assert.equal(row.length, 3, 'not all rows were length 3');
        }
    });
});

describe('Place X or O', function() {
    it('should place an X on the board', function() {
        var game = new TicTacToe();
        game.placeX(1, 1);
        assert.equal(game.board[1][1], 'X', 'coordinates [1,1] should be an X'); 
    });

    it('should place an O on the board', function() {
        var game = new TicTacToe();
        game.placeO(1, 1);
        assert.equal(game.board[1][1], 'O', 'coordinates [1,1] should be an O'); 
    });
});

describe('Determining a legal move', function() {
    it('should not allow someone to overwrite a previous move', function() {
        var game = new TicTacToe();
        game.placeX(1, 1);
        game.placeO(1, 1);
        assert.equal(game.board[1][1], 'X', 'coordinates [1,1] should be an X');
    });
});

describe('Determining a winner', function () {
    it('should return false if there is no winner', function() {
        var game = new TicTacToe();
        game.placeX(0, 0);
        game.placeX(0, 2);
        game.placeX(1, 1);
        assert.equal(game.checkWinner(), false, `should return false when there is no winner: \n ${game.board[0]} \n ${game.board[1]} \n ${game.board[2]}`);
    });

    it('should determine a winner by rows', function () {
        var game = new TicTacToe();
        game.placeX(0, 0);
        game.placeX(0, 1);
        game.placeX(0, 2);
        assert.equal(game.checkWinner(), 'X', `should return the winner when they fill a row: \n ${game.board[0]} \n ${game.board[1]} \n ${game.board[2]}`);
    });

    it('should determine a winner by columns', function() {
        var game = new TicTacToe();
        game.placeX(0, 0);
        game.placeX(1, 0);
        game.placeX(2, 0);
        assert.equal(game.checkWinner(), 'X', `should return the winner when they fill a column: \n ${game.board[0]} \n ${game.board[1]} \n ${game.board[2]}`);
    });

    it('should determine a winner by diagonals', function() {
        var game = new TicTacToe();
        game.placeX(0, 0);
        game.placeX(1, 1);
        game.placeX(2, 2);
        assert.equal(game.checkWinner(), 'X', `should return the winner when they fill a diagonal: \n ${game.board[0]} \n ${game.board[1]} \n ${game.board[2]}`);
    });
});