import style from "./toggleButton.module.scss";
import { useState } from "react";

function ToggleBtn() {
  const [condition, setCondition] = useState(false);

  function event(e) {
    setCondition(prevCondition => {
      const newCondition = !prevCondition;
    
      if (newCondition) {
        e.target.textContent = "Yes";
      } else {
        e.target.textContent = "No";
      }

      return newCondition;
    });
  }
  
  return (
    <button className={condition ? style.btnYes : style.btnNo} onClick={(e) => event(e)}>
      No
    </button>
  );
};

export default ToggleBtn;