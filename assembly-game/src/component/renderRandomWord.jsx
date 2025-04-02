function RenderRandomWord(prop) {
  const renderWord = [...prop.word].map((letter, index) => (
    <span key={index}
      className="alphabetGuess"
    >
      {prop.lose? letter.toUpperCase() : (prop.guessedLetter.includes(letter.toUpperCase()) ? letter.toUpperCase() : "_")}
    </span>
  ))

  return (
    <div className="d-flex flex-row flex-wrap justify-content-center align-items-center gap-1">
      {renderWord}
    </div>
  )
}

export default RenderRandomWord;