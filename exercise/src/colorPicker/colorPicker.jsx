import { useState } from "react";
import style from "./colorPicker.module.scss"

function ColorPicker() {
  const [color, setColor] = useState("#ffffff");

  function handleColorChange(e) {
    setColor(e.target.value);
  }

  return (
    <div className={style.colorPicker}>
      <h1>Color Picker</h1>
      <div className={style.color} style={{backgroundColor: color}}>
        <p>Selected Color: {color}</p>
      </div>
      <label>
        Select a color: 
        <input type="color" value={color} onChange={handleColorChange} />
      </label>
    </div>
  );
}

export default ColorPicker;