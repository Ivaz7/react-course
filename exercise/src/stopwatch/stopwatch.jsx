import { useEffect, useRef, useState } from "react";
import style from "./stopwatch.module.scss";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapseTime, setElapseTime] = useState(0);
  const [lapsArray, setLapsArray] = useState([]);
  const timePassLaps = useRef(0);
  const startTimeRef = useRef(0);
  const intervalId = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalId.current = setInterval(() => {
        setElapseTime(Date.now() - startTimeRef.current)
      }, 10);
    }

    return () => {
      clearInterval(intervalId.current)
    }
  }, [isRunning]);

  const listLapsArray = lapsArray.map((lap, index) => {
    return (
      <li key={index}>
        Lap {index + 1}: {formatTime(lap)}
      </li>
    );
  })

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapseTime;
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setIsRunning(false);
    setElapseTime(0);
    startTimeRef.current = 0;
    timePassLaps.current = 0;
  }

  function laps() {
    const lap = elapseTime - timePassLaps.current;
    setLapsArray(prev => [...prev, lap]);
    timePassLaps.current = elapseTime;
  }
  

  function deleteLaps() {
    setLapsArray([]);
  }

  function formatTime(time) {
    let minutes = Math.floor(time / (1000 * 60) % 60);
    let seconds = Math.floor(time / (1000) % 60);
    let miliSeconds = Math.floor(time % 1000 / 10);

    return (<>{padZero(minutes)}:{padZero(seconds)}:{padZero(miliSeconds)}</>);
  }

  function padZero(num) {
    return (num < 10 ? "0" : "") + num; 
  }

  return (
    <div className={style.div}>
      <h1>Stopwatch</h1>
      <div className={style.time}>{formatTime(elapseTime)}</div>
      <div>
        <button className={style.start} onClick={start}>Start</button>
        <button className={style.stop} onClick={stop}>Stop</button>
        <button className={style.reset} onClick={reset}>Reset</button>
      </div>
      <div>
        <button className={style.lap} onClick={laps}>Lap</button>
        <button className={style.deleteLaps} onClick={deleteLaps}>Delete Laps</button>
      </div>
      <ul>
        {listLapsArray}
      </ul>
    </div>
  );
}

export default Stopwatch;