import { useState } from "react";

export default function Timer(props) {
  const [time, setTime] = useState(props.startTime); // Pass initial state

  console.log(`Current time is ${time}`);


//   Note: Do not use setTimeout, useEffect is more appropriate 
  setTimeout(() => {
    setTime (time + 1);
    console.log(`Current time is ${time}`);
  }, 1000);

  return (
    <div>
      <h3>Timer</h3>

      <p>{time}</p>
    </div>
  );
}
