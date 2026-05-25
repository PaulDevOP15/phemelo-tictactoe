import Square from './Square';
import './Board.css';

function Board({ board, onSquareClick }) {
  return (
    <section className="board-container">
      <span id="board-desc" style={{position: 'absolute', left: '-9999px'}}>
        Click squares to make moves. Use arrow keys to navigate.
      </span>
      <div
        className="board"
        role="grid"
        aria-label="Tic tac toe game board"
        aria-describedby="board-desc"
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
