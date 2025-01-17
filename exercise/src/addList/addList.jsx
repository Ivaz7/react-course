import { useEffect, useRef, useState } from "react";
import style from './addList.module.scss';

function AddList() {
  const [list, setList] = useState([]);
  const input = useRef(null); 

  const listItemRender = list.map((list, index) => {
    return <li key={index}>
      <button onClick={() => remove(index)} >
        X  
      </button>  
      {list}
    </li>
  })

  useEffect(() => {
    input.current.focus();
  }, []);

  function remove(index) {
    setList(prevList => {
      return prevList.filter((_ , i) => i !== index);
    })
  }

  function handleCLik() {
    input.current.focus();

    const newList = document.getElementById("input").value;

    if (!newList) {
      return;
    }

    document.getElementById("input").value = "";

    setList(prevList => {
      return ([...prevList, newList])      
    })
  }

  return (
    <div className={style.div}>
      <div>
        <input ref={input} type="text" id="input" />
        <button onClick={handleCLik}>Add to the list</button>
      </div>

      <ul>
        {listItemRender}
      </ul>
    </div>
  )
}

export default AddList;