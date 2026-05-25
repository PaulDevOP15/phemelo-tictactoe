import { useReducer, useEffect } from 'react';
import Board from './Board';
import Status from './Status';
import Scoreboard from './Scoreboard';
import ModeSelector from './ModeSelector';
import {
  gameReducer,
  initialState,
  MAKE_MOVE,
  RESET_GAME,
  SET_GAME_MODE,
  RESET_SCORES,
} from '../reducer/gameReducer';
import { getGameStatus, getRandomMove } from '../utils/gameUtils';
import '../styles/game.css';

function Game() {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const { board, gameMode, currentPlayer, scores } = state;
  const status = getGameStatus(state);

  const isComputerGame = gameMode === 'computer';
  const isComputerTurn = isComputerGame && currentPlayer === 'O' && !status.isGameOver;

  useEffect(() => {
    if (!isComputerTurn) return;

    const timer = setTimeout(() => {
      const computerMoveIndex = getRandomMove(board);
      dispatch({ type: MAKE_MOVE, index: computerMoveIndex });
    }, 600);

    return () => clearTimeout(timer);
  }, [isComputerTurn, board]);

  function handleSelectMode(mode) {
    dispatch({ type: SET_GAME_MODE, gameMode: mode });
  }

  function handleSquareClick(index) {
    if (isComputerGame && currentPlayer === 'O') return;
    dispatch({ type: MAKE_MOVE, index });
  }

  function handleReset() {
    dispatch({ type: RESET_GAME });
  }

  function handleResetScores() {
    dispatch({ type: RESET_SCORES });
  }

  if (!gameMode) {
    return (
      <main className="game" role="main" aria-label="Tic Tac Toe Game">
        <h1 className="game-title">Tic Tac Toe</h1>
        <ModeSelector onSelectMode={handleSelectMode} />
      </main>
    );
  }

  return (
    <main className="game" role="main" aria-label="Tic Tac Toe Game">
      <h1 className="game-title">Tic Tac Toe</h1>
      {isComputerGame && (
        <p className="game-subtitle" aria-label="Game mode information">
          You are X, Computer is O
        </p>
      )}
      <Scoreboard 
        scores={scores} 
        gameMode={gameMode}
        onResetScores={handleResetScores}
      />
      <Status status={status} />
      <Board board={board} onSquareClick={handleSquareClick} />
      {status.isGameOver && (
        <button 
          type="button" 
          className="reset-btn" 
          onClick={handleReset}
          aria-label="Restart Game"
        >
          Restart Game
        </button>
      )}
    </main>
  );
}

export default Game;
