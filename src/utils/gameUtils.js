// Win/Draw line combinations
const ROWS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

const COLUMNS = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

const DIAGONALS = [
  [0, 4, 8],
  [2, 4, 6],
];

function getLineWinner(board, line) {
  const [a, b, c] = line;
  if (board[a] && board[a] === board[b] && board[a] === board[c]) {
    return board[a];
  }
  return null;
}

function getWinnerFromLines(board, lines) {
  for (const line of lines) {
    const winner = getLineWinner(board, line);
    if (winner) {
      return winner;
    }
  }
  return null;
}



export function checkWinner(board) {
  return (
    getWinnerFromLines(board, ROWS) ||
    getWinnerFromLines(board, COLUMNS) ||
    getWinnerFromLines(board, DIAGONALS)
  );
}

export function checkDraw(board) {
  return board.every(square => square !== null);
}



export function isValidMove(state, index) {
  const { board, winner, isDraw } = state;

  if (winner || isDraw) {
    return false;
  }
  if (index < 0 || index > 8) {
    return false;
  }
  if (board[index]) {
    return false;
  }
  return true;
}

export function getNextPlayer(currentPlayer) {
  return currentPlayer === 'X' ? 'O' : 'X';
}



export function getGameStatus(state) {
  const { winner, isDraw, currentPlayer } = state;

  if (winner) {
    return {
      type: 'winner',
      message: `Winner: ${winner}`,
      isGameOver: true,
    };
  }

  if (isDraw) {
    return {
      type: 'draw',
      message: 'Draw!',
      isGameOver: true,
    };
  }

  return {
    type: 'active',
    message: `Next Player: ${currentPlayer}`,
    isGameOver: false,
  };
}



export function getRandomMove(board) {
  const emptySquares = board
    .map((square, index) => (square === null ? index : null))
    .filter(index => index !== null);
  
  return emptySquares[Math.floor(Math.random() * emptySquares.length)];
}



export function calculateWinner(board) {
  return checkWinner(board);
}

export function isBoardFull(board) {
  return checkDraw(board);
}

export function getComputerMove(board) {
  return getRandomMove(board);
}

export function getEmptySquares(board) {
  return board
    .map((square, index) => (square === null ? index : null))
    .filter(index => index !== null);
}

export function getStatusMessage(state) {
  const status = getGameStatus(state);
  return status.message;
}
