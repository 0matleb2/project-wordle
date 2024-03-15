import React from 'react';
import Banner from '../Banner';

function LostBanner({ answer, restart }) {
  return (
    <Banner mood="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button onClick={restart}>Restart Game</button>
    </Banner>
  );
}

export default LostBanner;
