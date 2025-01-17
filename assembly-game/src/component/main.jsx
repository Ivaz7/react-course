import { useEffect, useState } from "react";
import LanguageElems from "./languageElems";
import WinStatus from "./winStatus";
import { language } from "./languageSource";
import RenderRandomWord from "./renderRandomWord.jsx";
import ButtonKeyboard from "./buttonKeyboard.jsx";
import NewGame from "./buttonNewGame.jsx";
import { ThreeCircles } from 'react-loader-spinner';

function Main() {
  const [lang, setLang] = useState(language);
  const [word, setWord] = useState("");
  const [guessedLetter, setGuessedLetter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchRandomWord = async () => {
    try {
      setLoading(true);

      let wordFetched = '';

      while (wordFetched.length > 5 || wordFetched === '') {
        const response = await fetch("https://random-word-api.vercel.app/api?words=1");
        
        if (!response.ok) {
          throw new Error("Failed to get random word");
        }
        
        const data = await response.json();
        wordFetched = data[0]?.toUpperCase() || "";
      }

      setWord(wordFetched);
      setGuessedLetter([]);
      setError('');
    } catch (err) {
      setError("Failed to get random word. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomWord();
  }, []);

  const wrongGuessedArray = guessedLetter.filter(
    (letter) => !word.includes(letter)
  );
  
  const correctGuessedArray = guessedLetter.filter(
    (letter) => word.includes(letter)
  );

  const won = correctGuessedArray.length === word.length;
  const lose = wrongGuessedArray.length === lang.length - 1;

  if (loading) {
    return <div className="loading">
      <ThreeCircles 
        height="100"
        width="100"
        color="white"
      />
    </div>;
  }

  if (error) {
    return (
      <div className="error d-flex flex-column gap-2 justify-content-center align-items-center">
        <p>{error}</p>
        <button className="btn btn-primary" onClick={fetchRandomWord}>Retry</button>
      </div>
    );
  }

  return (
    <main className="d-flex flex-column align-items-center">
      <WinStatus 
        won={won} 
        lose={lose} 
        wrongGuessedArray={wrongGuessedArray}
      />
      <LanguageElems
        wrongGuessedArray={wrongGuessedArray}
        lang={lang}
        setLang={setLang}
      />
      <RenderRandomWord
        guessedLetter={guessedLetter}
        word={word}
        lose={lose}
      />
      <ButtonKeyboard
        guessedLetter={guessedLetter}
        setGuessedLetter={setGuessedLetter}
        word={word}
        won={won}
        lose={lose}
      />
      <NewGame 
        won={won}
        lose={lose}
        setGuessedLetter={setGuessedLetter}
        fetchRandomWord={fetchRandomWord}
      />
    </main>
  );
}

export default Main;
