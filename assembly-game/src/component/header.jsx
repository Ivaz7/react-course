function Header() { 
  return (
    <>
      <header className="d-flex justify-content-center align-items p-3 gap-2">
        <h1>Assembly: Endgame</h1>
        <div className="circleInfo d-inline-flex align-items-center">
          <i className="fa-solid fa-circle-info"></i>
          <p className="explanation">
            Guess the word within 7 attempts to keep the programming world safe from Assembly!
          </p>
        </div>
      </header>
    </>
  )
}

export default Header;