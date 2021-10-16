import React from "react";
import {
  getMonth,
  format,
  getDaysInMonth,
  getDay,
  getYear,
  getWeekOfMonth,
} from "date-fns";
import styles from "./numbers.module.scss"
import classNames from "classnames";
import { CalendarContext } from "../../../../contexts";
import { useContext } from "react/cjs/react.development";

const Numbers = (props) => {
  const [today, setToday] = useContext(CalendarContext)
  const month = getMonth(today);
  const year = getYear(today);
  const numbers = getDaysInMonth(Number(format(today, "L")));
  const daysArr = [];
  for (let i = 1; i <= numbers; i++) {
    daysArr.push(i);
  }
  const newArr = daysArr.map((day) => {
    return (
      <h3
        className={classNames({[styles.selected]: (Number(format(today, "d"))===day)}, {[styles.numbers]: true})}
        key={day}
        style={{
          marginLeft: `${4 * 16.45 * getDay(new Date(year, month, day))}px`,
          marginTop: `${getWeekOfMonth(new Date(year, month, day)) * 32}px`,
        }}
      >
        {day}
      </h3>
    );
  });
  return <div className={styles.numbersWrapper}>{newArr}</div>;
};

export default Numbers;
