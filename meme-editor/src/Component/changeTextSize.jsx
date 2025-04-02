function ChangeTextSize(prop) {
  function increase(e) {
    e.preventDefault();
    prop.setTextSize(prev => prev + 1);
  }

  function decrease(e) {
    e.preventDefault();
    prop.setTextSize(prev => {
      if (prev < 0) {
        return 0;
      } else {
        return prev - 1;
      }
    })
  }

  return (
    <div className="d-flex flex-column flex-sm-row gap-2">
      <button className="flex-grow-1" onClick={increase}>Increase The Text</button>
      <button className="flex-grow-1" onClick={decrease}>Decrease The Text</button>
    </div>
  )
}

export default ChangeTextSize;