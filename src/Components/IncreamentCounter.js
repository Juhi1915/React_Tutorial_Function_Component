import react, { useEffect, useState } from "react";

const IncDecfunction = () => {
  const [count, setCount] = useState(0);
  const setIncValue = () => {
    if (count <= 15) {
      setCount(count + 1);
    } else {
      alert("Exceed Limit");
    }
  };
  const seDecValue = () => {
    if(count>0){
      setCount(count - 1);
    }
    else{
            alert("we can go beyond 0");
    }
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
