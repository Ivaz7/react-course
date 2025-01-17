import { useEffect } from "react";
import { useState } from "react";
import CanvasImg from "./canvas";

function APImemeFetch(prop) {
  const [error, setError] = useState(null);
  const [meme, setMeme] = useState(0);
  const [positions, setPositions] = useState([]);
  const [res, setRes] = useState(null);

  useEffect(() => {
    async function fetchMeme() {
      try {
        const response = await fetch("https://api.imgflip.com/get_memes")
        const data = await response.json();
        setRes(data);
      } catch (e) {
        setError(e);
      }
    }

    fetchMeme();
  }, [])

  function changeImg(e) {
    e.preventDefault();
    setMeme(prev => prev + 1 % 105);
    setPositions(prop.inputVal.map((_, index) => ({ x: 50, y: 50 * (index + 2) })));
  }

  if (error) {
    console.log(error);
    return;
  }

  if (!res) {
    return;
  }


  return (
    <>
      <CanvasImg positions={positions} setPositions={setPositions} canvasRef={prop.canvasRef} inputVal={prop.inputVal} url={res.data.memes[meme].url} />
      <button onClick={changeImg}>Next Image &#40;Change The Image&#41;</button>    
    </>
  )
}

export default APImemeFetch;