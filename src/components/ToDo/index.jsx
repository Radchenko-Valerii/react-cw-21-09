import { Formik, Field, Form} from "formik";
import React from "react";
import { useState } from "react";
import classNames from "classnames";
import styles from "./toDo.module.scss";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);

  const addTasks = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      isDone: false,
      isExist: true,
    };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  const submitHandler = (values, formikBag) => {
    const { taskText } = values;
    addTasks(taskText);
    formikBag.resetForm();
  };
  

  const tasksArray = tasks.map((obj) => {
    const checkboxClasses = classNames({ [styles.checked]: obj.isDone, [styles.checkbox]: true });
    return (
      <label key={obj.id}>
        <ol className={checkboxClasses}>
          <Field
            
            type="checkbox"
            name="text"
            id={obj.id}
            checked={obj.isDone}
            onChange={() => {
              obj.isDone = !obj.isDone;
              setTasks([...tasks]);
            }}
          />{" "}
          {obj.text}
          <button
            type="button"
            onClick={() => {
              obj.isExist = false;
              setTasks(tasks.filter((task) => task.isExist));
            }}
          >
            delete
          </button>
        </ol>
      </label>
    );
  });

  console.log(tasks);
  return (
    <div>
      <h1>ToDo</h1>
      <Formik initialValues={{ taskText: "" }} onSubmit={submitHandler}>
        <Form>
          <Field name="taskText" placeholder="enter task" />
          <button name="submit" type="submit">
            add
          </button>
        </Form>
      </Formik>
      <ul>
        <Formik initialValues={{ id: "", text: "", isDone: "" }}>
          {() => {
            return <Form>{tasksArray}</Form>;
          }}
        </Formik>
      </ul>
    </div>
  );
};

export default ToDo;
