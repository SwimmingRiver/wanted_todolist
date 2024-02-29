import { useDispatch } from "react-redux";
import "./App.css";
import { useState } from "react";
import { todoSlice } from "./reducer/reducer";
import List from "./components/List/list";

function App() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const addToDo = () => {
    dispatch(todoSlice.actions.ADD_TODO(todo));
    setTodo("");
  };
  return (
    <div className="App">
      <input
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={addToDo}>add</button>
      <List />
    </div>
  );
}

export default App;
