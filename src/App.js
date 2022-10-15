import "./styles.css";
import SetTimeoutExample from "./Components/SetTimeoutExample";
import IncDecfunction from "./Components/IncreamentCounter";
import TodoList from "./Components/TodoExample/TodoList";
import DebounceThrottling from "./Components/DebounceThrottling";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <IncDecfunction />
      <SetTimeoutExample />
      <br />
      <TodoList />
      <DebounceThrottling />
    </div>
  );
}
