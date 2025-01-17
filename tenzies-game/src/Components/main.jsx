import { useEffect, useState } from "react";
import RollBtn from "./rollBtn";
import DiceBtn from "./diceBtn";
import Confetti from 'react-confetti';

function Main() {
  const [dice, setDice] = useState(
    (new Array(10)).fill({
      picked: false,
      value: 0
    })
  );
  const [win, setWin] = useState(false);

  function rollRandomDice(nums) {
    return nums.map(arr => {
      if (!arr.picked) {
        return {
          ...arr,
          value: Math.ceil(Math.random() * 6)
        };
      } else {
        return {
          ...arr
        };
      }
    });
  }

  useEffect(() => {
    setDice(prev => rollRandomDice(prev));
  }, []);

  useEffect(() => {
    if (dice.every(num => num.picked === true) && dice.every(num => num.value === dice[0].value)) {
      setWin(true);
    }
  }, [dice]); 

  const renderDice = dice.map((num, index) => (
    <DiceBtn setWin={setWin} num={num} key={index} index={index} dice={dice} setDice={setDice} />
  ));

  return (
    <>
      {win && (<Confetti  />)}
      <main className="d-flex flex-column gap-5">
        <div className="dice-container">
          {renderDice}
        </div>
        <RollBtn win={win} setWin={setWin} dice={dice} rollRandomDice={rollRandomDice} setDice={setDice} />
      </main>
    </>
  );
}

export default Main;
