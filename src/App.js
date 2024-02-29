import { useDispatch } from "react-redux";
import "./App.css";
import { useState } from "react";
import { todoSlice } from "./reducer/reducer";
import List from "./components/List/list";
import styled from "styled-components";

const Button = styled.button`
  border: solid gray 3px;
  border-radius: 5px;
  background-color: white;
  height: 50px;
  width: 80px;
`;
const Input = styled.input`
  border: solid gray 3px;
  border-radius: 5px;
  background-color: white;
  height: 42px;
  width: 180px;
  font-size: 30px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
function App() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const addToDo = () => {
    dispatch(todoSlice.actions.ADD_TODO(todo));
    setTodo("");
  };
  return (
    <Body>
      <Wrapper>
        <Input
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          placeholder="input"
        />
        <Button onClick={addToDo}>ADD</Button>
      </Wrapper>

      <List />
    </Body>
  );
}

export default App;
