import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoSlice } from "../../reducer/reducer";
import styled from "styled-components";

const Button = styled.button`
  border: solid gray 3px;
  border-radius: 5px;
  background-color: white;
  height: 50px;
  width: 80px;
`;
const Wrapper = styled.div`
  border: solid 3px gray;
  border-radius: 3px;
  width: 265px;
  display: flex;
  flex-direction: column;
`;
const Text = styled.p`
  width: 50px;
  font-size: 30px;
  color: gray;
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid 1px gray;
`;
const List = () => {
  const todoList = useSelector((state) => state);
  const dispatch = useDispatch();
  const deleteTodo = (index) => {
    dispatch(todoSlice.actions.DELETE_TODO(index));
  };
  return (
    <Wrapper>
      {todoList.map((item, index) => (
        <Box key={index}>
          <Text>{item}</Text>
          <Button
            onClick={() => {
              deleteTodo(index);
            }}
          >
            delete
          </Button>
        </Box>
      ))}
    </Wrapper>
  );
};

export default List;
