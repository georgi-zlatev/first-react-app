import { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);

  const incrementClickHandler = () => {
    setCount(oldValue => oldValue + 1);
  };

  const counterResetHandler = () => {
    setCount(0);
  };

  if (count < 0) {
    return(
      <h3>Invalid count!</h3>
    )
  }

  let message = null;

  switch (count) {
    case 1:
      message = 'First blood'
      break;
      case 2:
      message = 'Double kill'
      break;
      case 3:
      message = 'Triple kill'
      break;
      case 4:
      message = 'Multi kill'
      break;
      case 5:
      message = 'Unstoppable'
      break;
      case 6:
      message = 'God like'
      break;  
    default:
      message = 'Monster kill'
      break;
  }

  return (
    <div>
      <h3>Counter</h3>

      {count == 0 && <p>Please start incrementing</p>}

      <h4>{message}</h4>

      <p>Count: {count}</p>

      {/* Inline function for deduction */}
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={counterResetHandler}>Reset</button>
      <button onClick={incrementClickHandler}>+</button>
    </div>
  );
}
