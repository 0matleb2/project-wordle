import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';

function Game({ restart }) {
  const [answer] = React.useState(() => {
    const initialAnswer = sample(WORDS);
    console.info({ answer: initialAnswer });
    return initialAnswer;
  });
  const [guesses, setGuesses] = React.useState([]);

  function addGuess(guess) {
    isGameOver() || setGuesses([...guesses, guess]);
  }

  function isGameOver() {
    return guesses.length >= NUM_OF_GUESSES_ALLOWED || isGameWon();
  }

  function isGameWon() {
    return guesses.includes(answer);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} disabled={isGameOver()} />
      {isGameOver() &&
        (isGameWon() ? (
          <WonBanner numGuesses={guesses.length} restart={restart} />
        ) : (
          <LostBanner answer={answer} restart={restart} />
        ))}
    </>
  );
}

export default Game;
