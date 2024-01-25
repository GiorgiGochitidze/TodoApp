import "../CSS/home.css";
import Output from "./Output";
import Todo from "./Todo";
import { useState, useReducer } from "react";

const ACTIONS = {
  ADD_TODO: "add-todo",
  DEL_TODO: "del-todo",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            title: action.payload.title,
            description: action.payload.description,
          },
        ],
      };

    case ACTIONS.DEL_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };

    default:
      return state;
  }
};

const Home = () => {
  const [titleInput, setTitleInput] = useState("");
  const [descInput, setDescInput] = useState("");

  const [state, dispatch] = useReducer(reducer, { todos: [] });

  const addTodo = () => {
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: { title: titleInput, description: descInput },
    });

    setTitleInput("");
    setDescInput("");
  };

  const delTodo = (id) => {
    dispatch({
      type: ACTIONS.DEL_TODO,
      payload: { id },
    });
  };

  return (
    <div className="todo-container">
      <h1>Todo App</h1>
      <Todo
        titleInput={titleInput}
        descInput={descInput}
        setDescInput={setDescInput}
        setTitleInput={setTitleInput}
        addTodo={addTodo}
      />
      <Output delTodo={delTodo} todos={state.todos} />
    </div>
  );
};

export default Home;
