function Header() {
  return (
    <header className="d-flex justify-content-center align-items-center m-5 gap-2">
      <h1>Tenzies Game</h1>
      <div className="circleInfo">
        <i className="fa-solid fa-circle-info"></i>
        <p className="explanation">
          Tenzies is a fast-paced dice game where the goal is to roll and match all 10 dice to the same number.
        </p>
      </div>
    </header>
  )
}

export default Header;