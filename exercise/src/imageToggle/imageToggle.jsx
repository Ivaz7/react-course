import style from './imageToggle.module.scss';
import noImg from '../01assets/no.jpg';
import yesImg from '../01assets/yes.jpg';
import { useState } from 'react';

function ImageToggle() {
  let [state, setState] = useState(yesImg);

  function handleClick() {
    setState(prevState => {
      if (prevState === yesImg) {
        return noImg;
      } else {
        return yesImg
      }
    })
  }

  return (<img onClick={handleClick} className={style.img} src={state} />)
}

export default ImageToggle;