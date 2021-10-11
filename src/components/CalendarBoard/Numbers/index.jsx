import React from 'react';
import {getMonth,  startOfToday, format, getDaysInMonth} from 'date-fns'

const Numbers = () => {
  const today = startOfToday();
  const month = getMonth(today);
  const monthNumber = format(today, 'L');
  const numbers = getDaysInMonth(Number(monthNumber))
  const daysArr = [];
  for(let i = 0; i <= numbers; i++){
    daysArr.push(i)
  }
  const newArr = daysArr.map((day)=>{return <p >{day}</p>})
  return (
    <div style={{display:"flex", justifyContent:"space-around"}}>
      {newArr}
    </div>
  );
}

export default Numbers;