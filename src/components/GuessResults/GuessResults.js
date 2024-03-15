import React from 'react';
import { range } from '../../utils.js';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';
import Guess from '../Guess';

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((i) => (
        <Guess key={i} letters={guesses[i]} />
      ))}
    </div>
  );
}

export default GuessResults;
