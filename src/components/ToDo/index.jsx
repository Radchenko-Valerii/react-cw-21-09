import React from "react";
import { useState } from "react";
import { ToDoContext } from "../../contexts";
import ToDoAdder from "./ToDoAdder";
import ToDoList from "./ToDoList";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="ToDoComponent">
      <ToDoContext.Provider value={[tasks, setTasks]}>
        <ToDoAdder />
        <ToDoList />
      </ToDoContext.Provider>
    </div>
  );
};

export default ToDo;
