import { useEffect, useState } from "react";

function WidthHeight() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    console.log("rezie")

    return () => {
      window.removeEventListener("resize", handleResize)
      console.log("remove rezie")  
    };
  }, []);

  function handleResize() {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }

  return(<>
    <div style={{margin: "1rem"}}>
      Window width & Height Calc
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </div>
  </>)
}

export default WidthHeight;