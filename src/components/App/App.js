import Game from '../Game';
import Header from '../Header';
import React from 'react';

function App() {
  const [gameId, setGameId] = React.useState(() =>
    crypto.randomUUID()
  );

  function restartGame() {
    setGameId(crypto.randomUUID());
  }

  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game key={gameId} restart={restartGame} />
      </div>
    </div>
  );
}

export default App;
