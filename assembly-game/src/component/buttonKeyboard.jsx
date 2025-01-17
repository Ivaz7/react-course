function ButtonKeyboard(prop) {
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  function addUserLetter(letter) {
    prop.setGuessedLetter(prev => (
      prev.includes(letter) ? prev : [...prev, letter]
    ))
  }

  const renderAlphabet = alphabet.map((letter, index) => {
    let inputClass = "inputButton";
    const wordUpperCase = prop.word.toUpperCase();
    const isGuessed = prop.guessedLetter.includes(letter);
    const isCorret = isGuessed && wordUpperCase.includes(letter);
    const isWrong = isGuessed && !wordUpperCase.includes(letter);

    if (isCorret) {
      inputClass = "correct";
    }

    if (isWrong) {
      inputClass = "wrong";
    }

    const isDisabled = prop.lose || prop.won || isGuessed;

    return (
      <button
        className={inputClass}
        onClick={() => addUserLetter(letter)}
        disabled={isDisabled}
        style={{
          cursor: isDisabled ? "not-allowed" : "pointer",
        }}
        key={index}
      >
        {letter}
      </button>
    );
  });

  return (
    <div className="inputAlphabet m-5">
      {renderAlphabet}
    </div>
  );
}

export default ButtonKeyboard;
