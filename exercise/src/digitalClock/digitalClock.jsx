import { useEffect, useState } from "react";
import style from "./digitalClock.module.scss";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeInterval = setInterval(() => {
      timeChange();
    }, 1000)

    return () => {
      clearInterval(timeInterval);
    }
  },[]);

  function formatTime12() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return (<>
      <h1>
        {padZero(hours)}:{padZero(minutes)}:{padZero(seconds)} {meridiem}
      </h1>
    </>)
  }

  function formatTime24() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return (<>
      <h1>
        {padZero(hours)}:{padZero(minutes)}:{padZero(seconds)}
      </h1>
    </>)
  }

  function padZero(num) {
    return (num < 10 ? "0" : "") + num;
  }

  function timeChange() {
    setTime(new Date());
  }

  return (<>
    <div className={style.clock} style={{margin: "1rem", fontFamily: "Ariel"}}>
      <h1>Digital Clock</h1>
      <div>
        {formatTime12()}
        <p>&#40;12 Hours Format&#41;</p>
      </div>
      <div>
        {formatTime24()} 
        <p>&#40;24 Hours Format&#41;</p>
      </div>
    </div>
  </>)
}

export default DigitalClock;