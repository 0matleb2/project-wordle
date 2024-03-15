import React from 'react';
import { range } from '../../utils';

function Guess({ letters }) {
  return (
    <p className="guess">
      {range(5).map((i) => (
        <span
          key={i}
          className={[
            'cell',
            ...(letters?.[i] ? [letters[i].status] : []),
          ].join(' ')}
        >
          {letters?.[i]?.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
