import {
  checkWinner,
  getNextPlayer,
  checkDraw,
  isValidMove,
} from '../utils/gameUtils';

export const MAKE_MOVE = 'MAKE_MOVE';
export const RESET_GAME = 'RESET_GAME';
export const SET_WINNER = 'SET_WINNER';
export const SET_DRAW = 'SET_DRAW';
export const SET_GAME_MODE = 'SET_GAME_MODE';
export const RESET_SCORES = 'RESET_SCORES';

export const initialState = {
  board: Array(9).fill(null),
  currentPlayer: 'X',
  winner: null,
  isDraw: false,
  gameMode: null,
  scores: {
    X: 0,
    O: 0,
    draws: 0,
  },
};

export function gameReducer(state, action) {
  switch (action.type) {
    case SET_GAME_MODE:
      return {
        ...initialState,
        gameMode: action.gameMode,
      };

    case MAKE_MOVE: {
      if (!isValidMove(state, action.index)) {
        return state;
      }

      const board = state.board.slice();
      board[action.index] = state.currentPlayer;

      const nextState = { ...state, board };
      const winner = checkWinner(board);

      if (winner) {
        return gameReducer(nextState, { type: SET_WINNER, winner });
      }

      if (checkDraw(board)) {
        return gameReducer(nextState, { type: SET_DRAW });
      }

      return {
        ...nextState,
        currentPlayer: getNextPlayer(state.currentPlayer),
      };
    }

    case SET_WINNER:
      return {
        ...state,
        winner: action.winner,
        isDraw: false,
        scores: {
          ...state.scores,
          [action.winner]: state.scores[action.winner] + 1,
        },
      };

    case SET_DRAW:
      return {
        ...state,
        isDraw: true,
        scores: {
          ...state.scores,
          draws: state.scores.draws + 1,
        },
      };

    case RESET_GAME:
      return {
        ...initialState,
        gameMode: state.gameMode,
        scores: state.scores,
      };

    case RESET_SCORES:
      return {
        ...state,
        scores: {
          X: 0,
          O: 0,
          draws: 0,
        },
      };

    default:
      return state;
  }
}
