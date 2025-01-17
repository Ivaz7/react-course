import { useContext } from "react";
import { Context } from "./useContextFile";
import ComponentC from "./componentC";
import { TextGreeting } from "./useContextFile";

function ComponentB() {
  const context = useContext(Context);  
  const nameUser = useContext(TextGreeting);

  return (<>
  <div style={context}>
    Component B
    <p>
      Hi, {nameUser}!
    </p>
    <ComponentC />
  </div>
  </>)
}

export default ComponentB;