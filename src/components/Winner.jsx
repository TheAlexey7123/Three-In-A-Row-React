import Square from './Square.jsx';

export default function Winner({ winner, resetGame }) {
    if (winner === null) return null;

    const handleClick = () => {
        resetGame();
    }

    const winnerText = winner === false ? 'Empate' : 'Ganador: ';
    
    return(
        <section className="winner">
            <div className='text'>
                <h2>{winnerText}</h2>
                <header className='win'>
                    {winner && <Square>{winner}</Square>}
                </header>

                <footer>
                    <button onClick={handleClick}>Empezar de nuevo</button>
                </footer>
            </div>
        </section>
    );
}