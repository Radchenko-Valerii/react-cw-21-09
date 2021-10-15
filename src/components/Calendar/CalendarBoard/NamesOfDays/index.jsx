import React from "react";
import { addDays, startOfWeek, format } from "date-fns";


const NameOfDays = ({ currentDay }) => {
  const start = startOfWeek(currentDay);
  const namesOfDaysArray = new Array(7).fill(null).map((_, index) => {
    return <h3 key={index} className="nameOfDays">{format(addDays(start, index), "EEEEE")}</h3>;
  });
  return <div style={{display: "flex", justifyContent: "space-between"}}>{namesOfDaysArray}</div>;
};

export default NameOfDays;
