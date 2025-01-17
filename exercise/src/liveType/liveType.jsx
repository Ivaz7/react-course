import { useState } from "react";
import style from './liveType.module.scss';

function LiveTyping() {
  let [text, setText] = useState();

  function handleChange(e) {
    setText(e.target.value)
  }

  return (
    <div className={style.div}>
      <input type="text" value={text} onChange={handleChange} />
      <p>Typing: {text}</p>
    </div>
  )
}

export default LiveTyping;