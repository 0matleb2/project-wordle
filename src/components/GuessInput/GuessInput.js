import React from 'react';

function GuessInput({ addGuess, disabled }) {
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
        disabled={disabled}
        required={true}
        pattern="[A-Z]{5}"
        title="5 letter word"
        value={guess}
        onChange={handleGuessChange}
      />
    </form>
  );

  function handleGuessSubmit(event) {
    event.preventDefault();
    addGuess(guess);
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
