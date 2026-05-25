import '../styles/scoreboard.css';

function Scoreboard({ scores = { X: 0, O: 0, draws: 0 }, gameMode, onResetScores }) {
  const playerXLabel = gameMode === 'computer' ? 'You (X)' : 'Player X';
  const playerOLabel = gameMode === 'computer' ? 'Computer (O)' : 'Player O';

  return (
    <section className="scoreboard" aria-label="Game scores">
      <h2 className="scoreboard-title">Score</h2>
      
      <div className="scoreboard-grid">
        <div className="score-card score-card--x">
          <div className="score-label">{playerXLabel}</div>
          <div className="score-value" aria-label={`${playerXLabel} wins: ${scores.X}`}>
            {scores.X}
          </div>
        </div>

        <div className="score-card score-card--draw">
          <div className="score-label">Draws</div>
          <div className="score-value" aria-label={`Draws: ${scores.draws}`}>
            {scores.draws}
          </div>
        </div>

        <div className="score-card score-card--o">
          <div className="score-label">{playerOLabel}</div>
          <div className="score-value" aria-label={`${playerOLabel} wins: ${scores.O}`}>
            {scores.O}
          </div>
        </div>
      </div>

      <button
        type="button"
        className="reset-scores-btn"
        onClick={onResetScores}
        aria-label="Reset scores"
      >
        Reset Scores
      </button>
    </section>
  );
}

export default Scoreboard;
