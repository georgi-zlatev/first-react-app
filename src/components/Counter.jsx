import { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);

  const incrementClickHandler = () => {
    setCount(count + 1);
  };

  const counterResetHandler = () => {
    setCount(0);
  };

  return (
    <div>
      <h3>Counter</h3>

      <p>Count: {count}</p>

      {/* Inline function for deduction */}
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={counterResetHandler}>Reset</button>
      <button onClick={incrementClickHandler}>+</button>
    </div>
  );
}
