import react, { useEffect, useState } from "react";

const IncDecfunction = () => {
  const [count, setCount] = useState(0);
  const setIncValue = () => {
    if (count <= 15) {
      setCount(count + 1);
    } else {
      alert("we can go beyon 0");
    }
  };
  const seDecValue = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <div>
        <h5>{count}</h5>
      </div>
      <button onClick={setIncValue}>Click Add</button>
      <button onClick={seDecValue}>Click Sub</button>
    </div>
  );
};

export default IncDecfunction;
