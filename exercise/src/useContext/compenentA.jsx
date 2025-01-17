import { useState } from "react";
import ComponentB from "./componentB";
import { Context, TextGreeting } from "./useContextFile";

function ComponentA() {
  const style = {
    display: "inline-block",
    margin: "1rem",
    border: "1px solid black",
    padding: "1rem"
  }

  const name = useState("Ivaz")[0];

  return (<>
  <div style={style} className="box">
    Compoenent A
    <TextGreeting.Provider value={name}>
      <Context.Provider value={style}>
        <ComponentB />
      </Context.Provider>
    </TextGreeting.Provider>
  </div>
  </>)
}

export default ComponentA;