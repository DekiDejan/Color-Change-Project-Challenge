import { useState } from "react";
import Box from "./Components/Box/Box.jsx";
import Input from "./Components/Input/Input.jsx";

function App() {
  const [color, setColor] = useState("Empty Value");

  return (
    <div className="container">
      <Box color={color} />
      <Input setColor={setColor} />
    </div>
  );
}

export default App;
