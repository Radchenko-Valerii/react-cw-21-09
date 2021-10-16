import React from "react";
import {
  getMonth,
  format,
  getDaysInMonth,
  getDay,
  getYear,
  getWeekOfMonth,
} from "date-fns";
import styles from "./numbers.module.scss";
import classNames from "classnames";
import { CalendarContext } from "../../../../contexts";
import { useContext } from "react/cjs/react.development";

const Numbers = (props) => {
  const [today, setToday, selected, setSelected] = useContext(CalendarContext);
  const month = getMonth(today);
  const year = getYear(today);
  const numbers = getDaysInMonth(Number(format(today, "L")));
  const daysArr = [];
  for (let i = 1; i <= numbers; i++) {
    daysArr.push(i);
  }

  const newArr = daysArr.map((day) => {
    const date = new Date(year, month, day);
    return (
      <h3
        onClick={() => {
          setSelected(date);
        }}
        className={classNames(
          { [styles.today]: Number(format(today, "d")) === day },
          { [styles.selected]: Number(format(selected, "d")) === day },
          { [styles.numbers]: true }
        )}
        key={day}
        style={{
          marginLeft: `${65.8 * getDay(date)}px`,
          marginTop: `${getWeekOfMonth(date) * 32}px`,
        }}
      >
        {day}
      </h3>
    );
  });
  return <div className={styles.numbersWrapper}>{newArr}</div>;
};

export default Numbers;
