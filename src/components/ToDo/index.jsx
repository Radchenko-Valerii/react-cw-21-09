import { Formik, Field, Form, formikBag } from "formik";
import React from "react";
import { useState } from "react";
import classNames from "classnames";

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
    const checkboxClass = classNames({ checked: obj.isDone, checkbox: true });
    return (
      <label key={obj.id}>
        <ol>
          <Field
            className={checkboxClass}
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
            onClick={({id}) => {
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
