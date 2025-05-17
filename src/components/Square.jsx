export default function Square({ children, index, isSelected, changeTurn }) {
    const className = `square ${isSelected ? 'is-selected' : ''}`;

    const handleClick = () => {
        changeTurn(index);
    }

    return (
        <button className={className} onClick={handleClick}>
            {children}
        </button>
    );
}