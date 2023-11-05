import { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);

  const incrementClickHandler = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>Counter</h3>

      <p>Count: {count}</p>

      <button onClick={incrementClickHandler}>+</button>
    </div>
  );
}
