import React from 'react';
import { Formik, Field, Form} from "formik";
import classNames from "classnames";
import { useContext } from 'react/cjs/react.development';
import { ToDoContext } from '../../../contexts';
import styles from "./toDoList.module.scss";

const ToDoList = () => {
  const [tasks, setTasks] = useContext(ToDoContext)

  const tasksArray = tasks.map((obj) => {
    const checkboxClasses = classNames({[styles.checkbox]: true });
    const checkboxText = classNames({ [styles.checked]: obj.isDone, [styles.checkboxText]: true })
    return (
      <label key={obj.id}>
        <div className={styles.checkboxWrapper}>
        <ol className={checkboxClasses}>
          <Field
            className={styles.checkbox}
            type="checkbox"
            name="text"
            id={obj.id}
            checked={obj.isDone}
            onChange={() => {
              obj.isDone = !obj.isDone;
              setTasks([...tasks]);
            }}
          />
        </ol>
        <p className={checkboxText}>{obj.text}</p>
        <button
            className={styles.button}
            type="button"
            onClick={() => {
              obj.isExist = false;
              setTasks(tasks.filter((task) => task.isExist));
            }}
          >
            delete
          </button>
        </div>
      </label>
    );
  });

  return (
    <div>
      <ul>
        <Formik initialValues={{ id: "", text: "", isDone: "" }}>
          {() => {
            return <Form>{tasksArray}</Form>;
          }}
        </Formik>
      </ul>
    </div>
  );
}

export default ToDoList;
