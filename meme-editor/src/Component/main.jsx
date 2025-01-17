import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import APImemeFetch from "./APImeme";

function Main() {
  const [inputEl, setInputEl] = useState([1]);
  const [inputVal, setInputVal] = useState([]);
  const canvasRef = useRef(null);
  let buttonAdd = useRef(null);

  function handleInput(index, value) {
    setInputVal(prev => {
      const newValues = [...prev];
      newValues[index] = value;
      return newValues;
    })
  }
  
  const renderInputList = inputEl.map((arr, index) => (
    <div className="d-flex flex-row gap-2" key={arr}>
      <input value={inputVal[index] || ""} onChange={(e) => handleInput(index, e.target.value)} className="flex-grow-1" type="text" placeholder="Type Here" />
      <button onClick={() => removeInput(index)}>X</button>
    </div>
  ))
  
  useEffect(() => {
    const isDisabled = inputEl.length === 4;
  
    buttonAdd.current.style.cursor = isDisabled ? "not-allowed" : "pointer";
    buttonAdd.current.style.backgroundColor = isDisabled ? "#A4C8FF" : "#52a8d6";
    buttonAdd.current.disabled = isDisabled;
  }, [inputEl]);
  
  function removeInput(index) {
    setInputEl(prev => (
      prev.filter((_, i) => i !== index)
    ))
  }
  
  function addMoreInput(e) {
    e.preventDefault();
    setInputEl(prev => (
      [
        ...prev,
        prev[prev.length - 1] + 1
      ]
    ))
  }

  const downloadImage = () => {
    const canvas = canvasRef.current;
    const imageUrl = canvas.toDataURL('image/png'); 
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'canvas-image.png'; 
    link.click(); 
  };
  
  return (
    <main className="d-flex flex-column m-3 p-2 gap-5 align-items-center">
      <form className="d-flex flex-row gap-3 p-3 rounded">
        <div className="d-flex flex-column gap-2">
          <APImemeFetch canvasRef={canvasRef} inputVal={inputVal}/>
        </div>
        <div className="input-user d-flex flex-column gap-3">
          <h2>Here the text to put in:</h2>
          {renderInputList}
          <button onClick={addMoreInput} ref={buttonAdd} type="submit">Add More Input</button>
        </div>
      </form>
      <button onClick={downloadImage} className="btn-download">Download Your Image</button>
    </main>
  )
}

export default Main;