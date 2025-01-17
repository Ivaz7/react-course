import { useEffect, useState } from "react";
import style from './age.module.scss';

function IncremenetAge() {
  let [age, setAge] = useState(0);
  let [allowAge, setAllowAge] = useState(false);

  useEffect(() => {
    if (age > 17 && !allowAge) {
      setAllowAge(true);
    } else if (age <= 17 && allowAge) {
      setAllowAge(false);
    }
  }, [age, allowAge]);

  function increment() {
    setAge(prevAge => prevAge + 1);
  } 

  function decreament() {
    setAge(prevAge => {
      if (prevAge <= 0) {
        alert('Age cannot be lower than zero');
        return prevAge;
      }
      return prevAge - 1;
    });
  }

  return (
    <div className={style.div}>
      <p>
        Age: {age}
      </p>

      <div>
        <button onClick={increment}>Increment Age</button>
        <button onClick={decreament}>Decreanment Age</button>
      </div>

      <p>
        Allow to Work: <strong>{allowAge ? "Yes" : "No"}</strong>;
      </p>
    </div>
  );
}

export default IncremenetAge;