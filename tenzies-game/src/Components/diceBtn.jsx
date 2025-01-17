function DiceBtn(prop) {
  function changePicked(prev) {
    return prev.map((num, index) => {
      if (index === prop.index) {
        return {
          ...num,
          picked: !num.picked
        };
      } else {
        return num;
      }
    });
  }

  function pickedDice() {
    prop.setDice(prev => changePicked(prev));
  }

  return (
    <div className={prop.num.picked ? "dice-picked" : "dice-not-picked"} onClick={pickedDice}>
      {prop.num.value}
    </div>
  );
}

export default DiceBtn;
