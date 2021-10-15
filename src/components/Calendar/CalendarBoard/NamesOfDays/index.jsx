import React from "react";
import { addDays, startOfWeek, format } from "date-fns";
import  styles  from "./namesOfDays.module.scss"

const NameOfDays = ({ currentDay }) => {
  const start = startOfWeek(currentDay);
  const namesOfDaysArray = new Array(7).fill(null).map((_, index) => {
    return <h3 className={styles.names} key={index}>{format(addDays(start, index), "EEEEE")}</h3>;
  });
  return <div style={{display: "flex", justifyContent: "space-between", width:"400px"}}>{namesOfDaysArray}</div>;
};

export default NameOfDays;
