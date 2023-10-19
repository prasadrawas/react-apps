import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>{counter}</h1>
  
      <button onClick={addValue}>Add Value</button>
      <span> </span>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
