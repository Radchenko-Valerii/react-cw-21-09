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

const Numbers = () => {
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
        key={day}
        style={{
          position: "absolute",
          marginLeft: `${16.45 * getDay(new Date(year, month, day))}%`,
          marginTop: `${getWeekOfMonth(new Date(year, month, day)) * 30}px`,
        }}
      >
        {day}
      </h3>
    );
  });
  return <div style={{ display: "flex", flexWrap: "wrap" }}>{newArr}</div>;
};

export default Numbers;
