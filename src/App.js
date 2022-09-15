import "./styles.css";
import SetTimeoutExample from "./Components/SetTimeoutExample";
import IncDecfunction from "./Components/IncreamentCounter";
import TodoList from "./Components/TodoExample/TodoList"

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <IncDecfunction />
       <SetTimeoutExample />
      <br/>
      <TodoList/>
    </div>
  );
}
