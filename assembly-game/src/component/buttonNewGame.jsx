function NewGame(prop) {
  function makeNewGame() {
    prop.setGuessedLetter([])
    prop.fetchRandomWord();
  }

  if (prop.lose || prop.won) {
    return (
      <button onClick={makeNewGame} className="newGame">
        New Game
      </button>
    );
  }

  return null; 
}

export default NewGame;