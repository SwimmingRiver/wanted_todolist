import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoSlice } from "../../reducer/reducer";

const List = () => {
  const todoList = useSelector((state) => state);
  const dispatch = useDispatch();
  const deleteTodo = (index) => {
    dispatch(todoSlice.actions.DELETE_TODO(index));
  };
  return (
    <div>
      {todoList.map((item, index) => (
        <div key={index}>
          {item}
          <button
            onClick={() => {
              deleteTodo(index);
            }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default List;
