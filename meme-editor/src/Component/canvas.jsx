import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ChangeTextSize from "./changeTextSize";

function CanvasImg({ url, inputVal, canvasRef, positions, setPositions }) {
  const [textSize, setTextSize] = useState(24);
  const [draggingIndex, setDraggingIndex] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setPositions(inputVal.map((_, index) => ({ x: 20, y: 20 * (index + 2) })));
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
      const targetWidth = windowWidth < 300 ? windowWidth * 0.8 : windowWidth < 470 ? 250 : 400; 
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
        ctx.lineWidth = (textSize / 24) * 10;

        const textWidth = ctx.measureText(inputVal[index]).width;
        const textHeight = textSize * 1.2;

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
  }, [url, inputVal, positions, textSize, canvasRef, setPositions, windowWidth]);

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
    <div className="d-flex flex-column gap-2">
      <div className="d-flex justify-content-center" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
        <canvas onMouseDown={handleMouseDown} ref={canvasRef}></canvas>
      </div>
      <ChangeTextSize setTextSize={setTextSize} />
    </div>
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
