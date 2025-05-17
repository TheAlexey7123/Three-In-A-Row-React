import { WINNING_COMBINATIONS } from './constants.js'

export const checkWinner = (board) => {
    for(const comb of WINNING_COMBINATIONS){
        const [a,b,c] = comb;
        if(board[a] && board[a] === board[b] && board[a] === board[c]){
           return board[a];
        }
    }

    return false;
}

export const checkMatch = (board) => {
    return board.every((position) => position !== null);
}

export const setLocalStorage = (newBoard, newTurn) => {
    localStorage.setItem('board', JSON.stringify(newBoard));
    localStorage.setItem('turn', JSON.stringify(newTurn));
}

export const setWinnerLocalStorage = (winner) => {
    localStorage.setItem('winner', JSON.stringify(winner));
};


