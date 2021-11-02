import React from "react";
import { Formik, Field, Form } from "formik";
import classNames from "classnames";
import { useContext } from "react/cjs/react.development";
import { ToDoContext } from "../../../contexts";
import styles from "./toDoList.module.scss";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ToDoList = () => {
  const [tasks, setTasks] = useContext(ToDoContext);
  const tasksArray = tasks.map((obj) => {
    const checkboxClasses = classNames({ [styles.checkbox]: true });
    const checkboxTextClasses = classNames({
      [styles.checked]: obj.isDone,
      [styles.checkboxText]: true,
    });
    const checkboxWrapperClasses = classNames({
      [styles.checkboxWrapper]: true,
      [styles.checkboxWrapperDone]: obj.isDone,
    });
    return (
      <CSSTransition key={obj.id} timeout={500} className="transitionTask">
      <ol>
      <Formik initialValues={{ id: "", text: "", isDone: "" }}>
      <Form>
      <label>
        <div className={checkboxWrapperClasses}>
          <div className={checkboxClasses}>
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
          </div>
          <p className={checkboxTextClasses}>{obj.text}</p>
          <button
            className={styles.button}
            type="button"
            onClick={() => {
              obj.isExist = !obj.isExist;
              setTasks(tasks.filter((task) => task.isExist));
            }}
          >
            delete
          </button>
        </div>
      </label>
      </Form>
      </Formik>
      </ol>
      </CSSTransition>
    );
  });
  

  return (
    <div>
      <TransitionGroup component="ul">
          {tasksArray}
      </TransitionGroup>
    </div>
  );
};

export default ToDoList;


