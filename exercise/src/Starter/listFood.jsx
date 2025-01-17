export default function Main() {
  const food = ["banana", "apple", "orange"]

  const style = {
    backgroundColor: "black",
    color: "white"
  }

  return (
    <>
      <main style={style}>
        <ul>
          <li>{food[0]}</li>
          <li>{food[1]}</li>
          <li>{food[2]}</li>
        </ul>
      </main>
    </>
  );
}