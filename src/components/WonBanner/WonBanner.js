import React from 'react';
import Banner from '../Banner';

function WonBanner({ numGuesses, restart }) {
  return (
    <Banner mood="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numGuesses === 1 ? '1 guess' : `${numGuesses} guesses`}
        </strong>
        .
      </p>
      <button onClick={restart}>Restart Game</button>
    </Banner>
  );
}

export default WonBanner;
