import react from "react";
function DebounceThrottling() {
  const handleChange = () => {
    console.log("Debounceing....");
    //alert("Debounceing....");
  };
  const handleMouseMove = () => [console.log("Throttling......")];
  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  function throttle(fnc, delay) {
    let run = true;
    return function (...args) {
      if (run) {
        fnc(...args);
        run = false;
        setTimeout(() => (run = true), delay);
      }
    };
  }
  window.addEventListener("mousemove", throttle(handleMouseMove, 2000));
  return (
    <div>
      <span>Debounce And Throttling</span>
      <p>Search</p>
      <input
        type="text"
        pleaceholder="Enter Text"
        onChange={debounce(handleChange, 1000)}
      />
      <br />
      <div>Throttling</div>
      <input
        type="text"
        pleaceholder="Enter Throttling Text"
        onChange={throttle(handleMouseMove, 2000)}
      />
    </div>
  );
}
export default DebounceThrottling;
