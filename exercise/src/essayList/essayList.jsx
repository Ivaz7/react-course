import { useRef, useState } from "react";
import style from './essayList.module.scss';

function EssayWriting() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  const listItemRender = list.map((list, index) => {
    return <li key={index}>
      <div>
        <button onClick={() => remove(index)} >
          X  
        </button>  
        <div>{new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        })}
        </div>
        <button onClick={() => handleUp(index)}>&uarr;</button>
        <button onClick={() => handleDown(index)}>&darr;</button>
      </div>
      <div style={{maxWidth: "150px"}}>
        <p style={{maxWidth: "150px", wordWrap: "break-word", textAlign: "justify"}}>
          &nbsp;{list}
        </p>
      </div>
    </li>
  })

  function handleUp(index) {
    if (index > 0) {
      const updateList = [...list];
      [updateList[index], updateList[index - 1]] = [updateList[index - 1], updateList[index]];
      setList(updateList);
    }
  }

  function handleDown(index) {
    if (index < list.length - 1) {
      const updateList = [...list];
      [updateList[index], updateList[index + 1]] = [updateList[index + 1], updateList[index]];
      setList(updateList);
    }
  }

  function remove(index) {
    setList(prevList => {
      return prevList.filter((_ , i) => i !== index);
    })
  }

  function handleCLik() {  
    if (input.trim() !== "") {
      inputRef.current.focus();
      setList(prevList => {
        return ([...prevList, input])      
      })
      setInput('');
    }  
  }

  function handleInputChange(e) {
    setInput(e.target.value)
  }

  return (
    <div className={style.div}>
      <section>
        <div>
          <input type="number" placeholder={new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          })}
          disabled />
          <textarea ref={inputRef} id="input" value={input} onChange={handleInputChange} ></textarea>
          <button onClick={handleCLik}>Add Essay</button>
        </div>

        <ul>
          {listItemRender}
        </ul>
      </section>
    </div>
  )
}

export default EssayWriting;