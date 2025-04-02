import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ChangeTextSize from "./changeTextSize";

function CanvasImg({ url, inputVal, canvasRef, positions, setPositions }) {
  const [textSize, setTextSize] = useState(24);
  const [draggingIndex, setDraggingIndex] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setPositions(inputVal.map((_, index) => ({ x: 50, y: 50 * (index + 2) })));
  }, [inputVal, setPositions]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) {
      console.error("Canvas or context not found!");
      return;
    }

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = url;

    img.onload = () => {
      const targetWidth = 400; 
      const ratio = img.height / img.width;
      const targetHeight = targetWidth * ratio;
    
      canvas.width = targetWidth;
      canvas.height = targetHeight;
    
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
    
      const newPositions = positions.map(({ x, y }, index) => {
        ctx.font = `bold ${textSize}px Arial`;
        ctx.fillStyle = "white";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 10;
    
        const textWidth = ctx.measureText(inputVal[index]).width;
        const textHeight = textSize * 10;
    
        return { x, y, width: textWidth, height: textHeight };
      });
    
      setPositions(newPositions);
    
      newPositions.forEach(({ x, y }, index) => {
        ctx.strokeText(inputVal[index], x, y);
        ctx.fillText(inputVal[index], x, y);
      });
    };    

    img.onerror = () => {
      console.error("Failed to load image:", url);
    };
  }, [url, inputVal, positions, textSize, canvasRef, setPositions]);

  const handleMouseDown = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
  
    const index = positions.findIndex(
      ({ x, y, width, height }) =>
        mouseX >= x && mouseX <= x + width && mouseY >= y - height && mouseY <= y
    );
  
    if (index !== -1) {
      setDraggingIndex(index);
      setDragOffset({
        x: mouseX - positions[index].x,
        y: mouseY - positions[index].y,
      });
    }
  };  

  const handleMouseMove = (event) => {
    if (draggingIndex !== null) {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
  
      setPositions((prevPositions) =>
        prevPositions.map((pos, index) =>
          index === draggingIndex
            ? { ...pos, x: mouseX - dragOffset.x, y: mouseY - dragOffset.y }
            : pos
        )
      );
    }
  };  

  const handleMouseUp = () => {
    setDraggingIndex(null);
  };

  return (
    <>
      <div onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
        <canvas onMouseDown={handleMouseDown} ref={canvasRef}></canvas>
      </div>
      <ChangeTextSize setTextSize={setTextSize} />
    </>
  );
}

CanvasImg.propTypes = {
  url: PropTypes.string.isRequired,
  inputVal: PropTypes.arrayOf(PropTypes.string).isRequired,
  canvasRef: PropTypes.string.isRequired,
  positions: PropTypes.arrayOf(PropTypes.string).isRequired,
  setPositions: PropTypes.object.isRequired
};

export default CanvasImg;
