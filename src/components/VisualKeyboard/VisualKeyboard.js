import React from 'react';
import { checkGuess } from '../../game-helpers';

function VisualKeyboard({ guesses, answer }) {
  const results = guesses
    .map((guess) => checkGuess(guess, answer))
    .reduce((accumulatedResults, checkedGuess) => {
      checkedGuess.forEach(({ letter, status }) => {
        const guessedLetter = accumulatedResults[letter];
        if (!guessedLetter || guessedLetter === 'misplaced') {
          accumulatedResults[letter] = status;
        }
      });
      return accumulatedResults;
    }, {});

  return (
    <div className="visual-keyboard">
      <KeyRow keys={[...'QWERTYUIOP']} results={results} />
      <KeyRow keys={[...'ASDFGHJKL']} results={results} />
      <KeyRow keys={[...'ZXCVBNM']} results={results} />
    </div>
  );
}

function KeyRow({ keys, results }) {
  return (
    <p className="key-row">
      {keys.map((key) => (
        <span
          key={key}
          className={['key', ...(results[key] ? [results[key]] : [])].join(' ')}
        >
          {key}
        </span>
      ))}
    </p>
  );
}

export default VisualKeyboard;
