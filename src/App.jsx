import { useState } from "react";
import Box from "./Components/Box/Box.jsx";
import Input from "./Components/Input/Input.jsx";

function App() {
  const [color, setColor] = useState("Empty Value");

  const handleChange = (e) => {
    const newColor = e.target.value;
    setColor(newColor);
  };

  return (
    <div className="container">
      <Box color={color} />
      <Input handleChange={handleChange} />
    </div>
  );
}

export default App;
