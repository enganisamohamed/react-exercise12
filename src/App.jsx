import { useState } from "react";

function App() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e) => {
    setMouse((prev) => ({
      x: e.clientX !== prev.x ? e.clientX : prev.x,
      y: e.clientY !== prev.y ? e.clientY : prev.y,
    }));
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ height: "100vh" }}
    >
      <h2>Mouse X: {mouse.x}</h2>
      <h2>Mouse Y: {mouse.y}</h2>
    </div>
  );
}

export default App;