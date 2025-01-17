import { useContext } from "react";
import { Context } from "./useContextFile";

function ComponentC() {
  const style = useContext(Context);

  return (<>
    <div style={style}>
      Component C
    </div>
  </>)
}

export default ComponentC;