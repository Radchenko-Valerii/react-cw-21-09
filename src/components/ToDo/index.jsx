import { Formik, Field, Form, formikBag } from "formik";
import React from "react";
import { useState } from "react";
import classNames from "classnames";

const data = [
  {
    id: 1,
    text: "Пары - не удары, можно пропустить (с) Jason Statham",
    isDone: false,
  },
];

const ToDo = () => {
  const [tasks, setTasks] = useState(data);

  const addTasks = (text) => {
    const newTask = {
      id: data.length +1,
      text: text,
      isDone: false
    }
    const newTasks = [...data, newTask];
    setTasks(newTasks);
  }

  const submitHandler = (values, formikBag) => {
    const {taskText} = values;
    addTasks(taskText);
    formikBag.resetForm();
  }


  const tasksArray = data.map((obj) => {
    const checkboxClass = classNames({checked: obj.isDone, checkbox: true})
    return (
      <label>
        <Field className={checkboxClass} type="checkbox" name="text" id={obj.id} defaultChecked={obj.isDone} />
        {obj.text}
      </label>
    );
  });

  return (
    <div>
      <h1>ToDo</h1>
      <Formik initialValues={{taskText:''}} onSubmit={submitHandler}>
        <Form>
          <Field name="taskText" placeholder="enter task"/>
          <button name="submit" type="submit">add</button>
        </Form>
      </Formik>
      <ul>
        {tasks.map((task)=>{return task.text})}
      </ul>

      {/* <Formik initialValues={{id:'', text:'', isDone: ''}}>
        {({ values }) => {
          return <Form>{tasksArray}
          </Form>;
        }}
      </Formik> */}
    </div>
  );
};

export default ToDo;


