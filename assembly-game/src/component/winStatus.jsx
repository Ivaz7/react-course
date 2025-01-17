import farewellLang from "./farewellLangProm";

function WinStatus(prop) {
  let farewellString = '';

  if (prop.wrongGuessedArray.length > 0) {
    farewellString = farewellLang(prop.wrongGuessedArray)
  }

  return (
    <>
      {!prop.lose && !prop.won && farewellString !== '' && (
        <section className="statusWin d-inline-flex flex-column align-items-center bg-warning">
          <h2>{farewellString}</h2>
        </section>
      )}
      {prop.won && (
        <section className="statusWin d-inline-flex flex-column align-items-center bg-success">
          <h2>You Win!</h2>
          <p>🎊🎉 Well Done! 🎉🎊</p>
        </section>
      )}
      {prop.lose && (
        <section className="statusWin d-inline-flex flex-column align-items-center bg-danger">
          <h2>You Lose!</h2>
          <p>😭 Assembly Took Everything!! 😭</p>
        </section>
      )}
    </>
  );
}

export default WinStatus;
