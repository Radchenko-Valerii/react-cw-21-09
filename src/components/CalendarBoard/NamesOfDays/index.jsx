import React from "react";
import { addDays, startOfWeek, format } from "date-fns";


const NameOfDays = ({ currentDay }) => {
  const start = startOfWeek(currentDay);
  const namesOfDaysArray = new Array(7).fill(null).map((_, index) => {
    return <h3 key={index} className="nameOfDays">{format(addDays(start, index), "EEE")}</h3>;
  });
  return <div>{namesOfDaysArray}</div>;
};

export default NameOfDays;
