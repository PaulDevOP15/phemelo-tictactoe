import '../styles/modeSelector.css';

function ModeSelector({ onSelectMode }) {
  return (
    <section className="mode-selector" aria-label="Game mode selection">
      <h2 className="mode-title">Choose Game Mode</h2>
      <div className="mode-buttons" role="group" aria-label="Game mode options">
        <button
          type="button"
          className="mode-btn"
          onClick={() => onSelectMode('human')}
          aria-label="Two Players - Play with a friend"
        >
          <div>👥 Two Players</div>
          <span className="mode-label">Play with a friend</span>
        </button>
        <button
          type="button"
          className="mode-btn"
          onClick={() => onSelectMode('computer')}
          aria-label="vs Computer - Challenge the AI"
        >
          <div>🤖 vs Computer</div>
          <span className="mode-label">Challenge the AI</span>
        </button>
      </div>
    </section>
  );
}

export default ModeSelector;
