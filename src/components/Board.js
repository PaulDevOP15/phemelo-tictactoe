import Square from './Square';
import './Board.css';

function Board({ board, onSquareClick }) {
  return (
    <section className="board-container">
      <div 
        className="board" 
        role="grid" 
        aria-label="Tic tac toe game board. Click squares to make moves."
      >
        {board.map((value, index) => (
          <Square
            key={index}
            index={index}
            value={value}
            onClick={() => onSquareClick(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Board;
