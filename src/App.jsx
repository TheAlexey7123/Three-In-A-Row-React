import { useState } from 'react'
import './App.css'
import Square from './components/Square.jsx';
import Winner from './components/Winner.jsx';
import { checkWinner, checkMatch, setLocalStorage } from './logic/board.js'
import { TURN } from './logic/constants.js'
import confetti from 'canvas-confetti';
import Pointer from './components/Pointer.jsx';


function App() {
  const [board, setBoard] = useState(() => {
    const boardStorage = JSON.parse(localStorage.getItem('board'));
    return boardStorage ? boardStorage: Array(9).fill(null);
    });

    checkWinner(board);


  const [turn, setTurn] = useState(() => {
    const turnStorage = JSON.parse(localStorage.getItem('turn'));
    return turnStorage ?? TURN.X;
  });

  const [winner, setWinner] = useState(() => {
    const winnerStorage = JSON.parse(localStorage.getItem('winner'));
    return winnerStorage ?? null;
  });
  const [enabled, setEnabled] = useState(false);

    const changeTurn = (index) => {
        if(board[index]) return;
        const newBoard = [...board];
        newBoard[index] = turn;
        setBoard(newBoard);

        const newTurn = turn === TURN.X ? TURN.O : TURN.X;
        setTurn(newTurn);

        setLocalStorage(newBoard, newTurn);

        const isWinner = checkWinner(newBoard);
        if(isWinner){
            setWinner(isWinner);
            confetti();
        }

        else if(checkMatch(newBoard)){
            setWinner(false);
        }
    }

 const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURN.X);
    setWinner(null);
}

  return (
    <>
        <main className="board">
            <h1>Tic Tac Toe 2</h1>
            <button onClick={resetGame} className='reset'>Reiniciar juego</button>
            <section className="game">
                {
                    board.map((b, i) => {
                        return(
                            <Square changeTurn={changeTurn} index={i} key={i}>
                                {b}
                            </Square>
                        );
                    })
                }
            </section>
            <section className='turn'>
                <Square isSelected={turn === TURN.X}>
                    {TURN.X}
                </Square>
                <Square isSelected={turn === TURN.O}>
                    {TURN.O}
                </Square>
            </section>
            <Winner winner={winner} resetGame={resetGame}></Winner>
            <Pointer enabled={enabled} setEnabled={setEnabled}/>
        </main>
    </>
  )
}

export default App