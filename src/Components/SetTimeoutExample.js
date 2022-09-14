import react, { useEffect, useState } from "react";

const SetTimeoutExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div>
      <h2>{count}</h2>
      <h4>{count / 2}</h4>
    </div>
  );
};
export default SetTimeoutExample;
