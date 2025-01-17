function RollBtn(prop) {
  function rollDice(win) {
    if (!win) {
      prop.setDice(prev => prop.rollRandomDice(prev));
    } else {
      prop.setWin(false);
      prop.setDice(prev => {
        const resetDice = prev.map(num => ({
          ...num,
          picked: false
        }));
        return prop.rollRandomDice(resetDice);
      });
    }
  }

  return (
    <div onClick={() => rollDice(prop.win)} className="rollBtn">
      {prop.win ? "New game" : "Roll"}
    </div>
  );
}

export default RollBtn;
