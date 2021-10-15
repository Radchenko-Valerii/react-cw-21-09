import React from "react";
import {
  getMonth,
  startOfToday,
  format,
  getDaysInMonth,
  getDay,
  getYear,
  getWeekOfMonth,
} from "date-fns";
import styles from "./numbers.module.scss"
import classNames from "classnames";

const Numbers = (props) => {
  
  const today = startOfToday();
  const month = getMonth(today);
  const year = getYear(today);
  const monthNumber = format(today, "L");
  const numbers = getDaysInMonth(Number(monthNumber));
  const daysArr = [];
  console.log(today);
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
          marginTop: `${getWeekOfMonth(new Date(year, month, day)) * 30}px`,
        }}
      >
        {day}
      </h3>
    );
  });
  return <div className={styles.numbersWrapper}>{newArr}</div>;
};

export default Numbers;
