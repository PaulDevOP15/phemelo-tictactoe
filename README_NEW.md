# Tic Tac Toe - React Game

A modern, interactive Tic Tac Toe game built with React featuring a random AI opponent, responsive design, and comprehensive accessibility support.

## 🎮 Project Overview

This is a fully functional Tic Tac Toe implementation with a clean, modular React architecture. The game supports both **two-player mode** and **single-player mode against a computer opponent**. It demonstrates professional React patterns including state management with reducers, component composition, and accessibility best practices.

## ✨ Features

### Core Gameplay
- **Two Game Modes**: Play against a friend or challenge the computer AI
- **Real-time Status Updates**: Current player indicator and game outcome announcements
- **Win Detection**: Automatic detection of winning patterns (rows, columns, diagonals)
- **Draw Detection**: Identifies when the board is full with no winner
- **Game Reset**: Quick restart button after each game

### User Experience
- **Responsive Design**: Seamlessly adapts from mobile to desktop screens
- **Smooth Animations**: CSS transitions and visual feedback on interactions
- **Modern Styling**: Gradient backgrounds, glassmorphic cards, and shadow effects
- **Visual Hierarchy**: Clear distinction between active, winner, and draw states

### Accessibility
- **Keyboard Navigation**: Full Tab support for all interactive elements
- **Screen Reader Friendly**: Comprehensive ARIA labels and semantic HTML
- **Visible Focus Indicators**: Enhanced 3px outlines with visual feedback
- **Semantic Structure**: Proper use of `<main>`, `<section>`, and `<button>` elements
- **WCAG 2.1 Compliant**: Meets accessibility guidelines for inclusive design

## 🛠 Technologies Used

### Core Dependencies
- **React 19.2.6** - JavaScript library for building user interfaces
- **React DOM 19.2.6** - React package for working with the DOM
- **React Scripts 5.0.1** - Configuration and scripts from Create React App

### Development & Testing
- **Jest & React Testing Library** - Unit and integration testing
- **ESLint** - Code quality and consistency checking
- **Create React App** - Zero-configuration React development environment

### Styling
- **CSS3** - Modern CSS with gradients, animations, and responsive design
- **CSS Grid** - Game board layout
- **CSS Flexbox** - Component alignment and spacing
- **CSS Animations** - Smooth transitions and visual effects

## 📊 State Management

### Architecture
The application uses React's `useReducer` hook for centralized state management following the Redux pattern.

### State Structure
```javascript
{
  board: [null, null, null, ...],  // 9-element array representing game board
  currentPlayer: 'X' | 'O',         // Player whose turn it is
  winner: null | 'X' | 'O',         // Winning player
  isDraw: boolean,                  // Draw condition flag
  gameMode: null | 'human' | 'computer'  // Selected game mode
}
```

### Actions
- **MAKE_MOVE**: Places a player's mark on the board
- **SET_WINNER**: Updates state when a winner is detected
- **SET_DRAW**: Updates state when the board is full
- **RESET_GAME**: Resets to initial state while preserving game mode
- **SET_GAME_MODE**: Selects between two-player or computer modes

### Flow
1. User clicks a square → `MAKE_MOVE` action
2. Reducer validates move and updates board
3. Game logic checks for win/draw
4. If win/draw detected, appropriate action is dispatched
5. Player turn automatically switches
6. Computer makes move if applicable (600ms delay for UX)

## 🤖 AI Opponent

### Algorithm
The computer AI uses a **random move selection strategy**, choosing uniformly from all available empty squares. This approach provides a beginner-friendly challenge without excessive difficulty.

### Implementation
```javascript
// Get all empty square indices
const emptySquares = board
  .map((square, index) => (square === null ? index : null))
  .filter(index => index !== null);

// Select random index
return emptySquares[Math.floor(Math.random() * emptySquares.length)];
```

### Behavior
- Computer always plays as **O** (human plays as **X**)
- Computer moves automatically after the human move
- 600ms delay added for natural game feel
- Prevents double moves by checking game state

### Extensibility
The current random algorithm is intentionally simple to keep the game accessible to beginners. Future enhancements could implement:
- Minimax algorithm for optimal play
- Difficulty levels (easy/hard)
- Opening book strategies

## 🚀 Setup Instructions

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/phemelo-tictactoe.git
   cd phemelo-tictactoe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The app will open automatically at `http://localhost:3000`

### Available Scripts

- **`npm start`** - Runs development server with hot reload
- **`npm test`** - Launches test runner in watch mode
- **`npm run build`** - Creates optimized production build
- **`npm run eject`** - Ejects from Create React App (irreversible)

## 📁 Project Structure

```
src/
├── components/
│   ├── Game.js              # Main game container & state management
│   ├── Board.js             # Game board grid layout
│   ├── Square.js            # Individual playable squares
│   ├── Status.js            # Game status display
│   └── ModeSelector.js      # Game mode selection
├── reducer/
│   └── gameReducer.js       # State reducer & action types
├── utils/
│   └── gameUtils.js         # Pure utility functions
├── styles/
│   ├── game.css             # Game component styles
│   ├── modeSelector.css     # Mode selector styles
├── components/
│   ├── Board.css            # Board layout styles
│   └── Square.css           # Square button styles
├── App.js                   # Root component
└── index.js                 # React DOM render point
```

## 🎯 Key Design Patterns

### Component Composition
Components are small, focused, and reusable:
- **Game**: State management and orchestration
- **Board**: Grid layout and item rendering
- **Square**: Individual interactive button
- **Status**: Derives display from state
- **ModeSelector**: Mode selection UI

### Pure Functions
All utility functions are pure with no side effects:
- `checkWinner()` - Detects winning patterns
- `checkDraw()` - Checks if board is full
- `getRandomMove()` - Returns random valid move
- `getGameStatus()` - Derives display status from state

### Semantic HTML
- `<main>` for main content
- `<section>` for logical content sections
- `<button>` for all interactive elements
- `role="grid"` for board structure
- Proper heading hierarchy

### Responsive Design
- CSS Grid with `clamp()` for fluid sizing
- Flexbox for component layout
- Mobile-first media queries
- Touch-friendly button sizing

## ♿ Accessibility Features

- ✅ Full keyboard navigation support
- ✅ Screen reader compatible with aria-live regions
- ✅ Visible focus indicators (3px outlines)
- ✅ Semantic HTML structure
- ✅ ARIA labels on all interactive elements
- ✅ WCAG 2.1 Level AA compliance

## 🎨 Styling Highlights

- **Modern Glassmorphism**: Semi-transparent cards with backdrop blur
- **Gradient Text**: Eye-catching title with linear gradients
- **Smooth Animations**: 0.2s cubic-bezier transitions
- **Dynamic Shadows**: Multi-layer shadow effects for depth
- **Color Scheme**: 
  - X Player: Cyan (#38bdf8)
  - O Player: Pink (#f472b6)
  - Winner: Gold (#fbbf24)
  - Background: Dark slate (#0f172a)

## 🔮 Future Enhancements

- [ ] Score tracking across multiple games
- [ ] Difficulty levels for computer AI
- [ ] Game history and replay functionality
- [ ] Multiplayer via WebSocket
- [ ] Custom player names
- [ ] Sound effects and haptic feedback
- [ ] Dark/light theme toggle
- [ ] Unit tests and integration tests

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created by [Phemelo] - A modern take on the classic Tic Tac Toe game.

---

**Enjoy the game! 🎮**

For issues, suggestions, or contributions, please open an issue or pull request on GitHub.
