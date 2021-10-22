import React from 'react';
import { Formik, Field, Form, ErrorMessage} from "formik";
import { useContext } from 'react/cjs/react.development';
import { ToDoContext } from '../../../contexts';
import styles from "./toDoAdder.module.scss";
import { TODO_SCHEMA } from '../../../utils/validationSchema';

const ToDoAdder = () => { 
  const [tasks, setTasks] = useContext(ToDoContext)
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


  return (
    <div>
      <h1 className={styles.header}>ToDo</h1>
      <Formik validationSchema={TODO_SCHEMA} initialValues={{ taskText: "" }} onSubmit={submitHandler}>
        <Form>
          <Field className={styles.input} name="taskText" placeholder="enter task" />
          <button className={styles.button} name="submit" type="submit">
            add
          </button>
          <ErrorMessage name="taskText" >
            {(message) => <div style={{color:'red', position: 'absolute'}}>{message}</div>}
          </ErrorMessage>
        </Form>
      </Formik>
    </div>
  );
}

export default ToDoAdder;