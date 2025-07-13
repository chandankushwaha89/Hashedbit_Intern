import { useState } from "react";
import "./Cal.css";

function Cal() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleOperation = (operator) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Please enter valid numbers");
      return;
    }

    let res;
    switch (operator) {
      case "+":
        res = a + b;
        break;
      case "-":
        res = a - b;
        break;
      case "*":
        res = a * b;
        break;
      case "/":
        res = b !== 0 ? a / b : "Cannot divide by zero";
        break;
      default:
        res = "Invalid operation";
    }
    setResult(res);
  };

  return (
    <div className="calculator-container">
      <h2> Calculator</h2>

      <input
        type="number"
        className="calculator-input"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <br />

      <input
        type="number"
        className="calculator-input"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <br />

      <button
        className="calculator-button"
        onClick={() => handleOperation("+")}
      >
        Add
      </button>
      <button
        className="calculator-button"
        onClick={() => handleOperation("-")}
      >
        Subtract
      </button>
      <button
        className="calculator-button"
        onClick={() => handleOperation("*")}
      >
        Multiply
      </button>
      <button
        className="calculator-button"
        onClick={() => handleOperation("/")}
      >
        Divide
      </button>

      <div className="calculator-result">
        {result !== null ? `Result: ${result}` : "Perform a calculation"}
      </div>
    </div>
  );
}

export default Cal;