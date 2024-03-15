import React from 'react';

function GuessInput({ addGuess }) {
  const [guess, setGuess] = React.useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={handleGuessSubmit}
      autoComplete="off"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[A-Z]{5}"
        title="5 letter word"
        value={guess}
        onChange={handleGuessChange}
      />
    </form>
  );

  function handleGuessSubmit(event) {
    event.preventDefault();
    addGuess({
      id: window.crypto.randomUUID(),
      value: guess,
    });
    setGuess('');
  }

  function handleGuessChange(event) {
    if (event.target.value.length > 5) {
      return;
    }
    setGuess(event.target.value.toUpperCase());
  }
}

export default GuessInput;
