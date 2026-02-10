import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const append = (val) => {
    setValue((prev) => prev + val);
  };

  const clearAll = () => {
    setValue("");
  };

  const backspace = () => {
    setValue((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      setValue(eval(value.replace("%", "/100")).toString());
    } catch {
      setValue("Error");
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="header">
          <h2>Calculator</h2>
          <div className="display">{value || "0"}</div>
        </div>

        <div className="buttons">
          <button className="red" onClick={clearAll}>C</button>
          <button onClick={() => append("%")}>%</button>
          <button onClick={backspace}>⌫</button>
          <button className="op" onClick={() => append("/")}>÷</button>

          <button onClick={() => append("7")}>7</button>
          <button onClick={() => append("8")}>8</button>
          <button onClick={() => append("9")}>9</button>
          <button className="op" onClick={() => append("*")}>×</button>

          <button onClick={() => append("4")}>4</button>
          <button onClick={() => append("5")}>5</button>
          <button onClick={() => append("6")}>6</button>
          <button className="op" onClick={() => append("-")}>−</button>

          <button onClick={() => append("1")}>1</button>
          <button onClick={() => append("2")}>2</button>
          <button onClick={() => append("3")}>3</button>
          <button className="op" onClick={() => append("+")}>+</button>

          <button className="zero" onClick={() => append("0")}>0</button>
          <button onClick={() => append(".")}>.</button>
          <button className="equals" onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
