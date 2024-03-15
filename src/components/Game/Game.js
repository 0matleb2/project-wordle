import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { checkGuess } from '../../game-helpers';

function Game() {
  const [answer] = React.useState(() => {
    const initialAnswer = sample(WORDS);
    console.info({ answer: initialAnswer });
    return initialAnswer;
  });
  const [guesses, setGuesses] = React.useState([]);

  function addGuess(guess) {
    if (guesses.length >= 6) {
      return;
    }
    setGuesses([...guesses, checkGuess(guess, answer)]);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;
