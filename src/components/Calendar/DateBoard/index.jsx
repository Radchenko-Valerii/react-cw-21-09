import React from 'react';
import { startOfToday, format } from 'date-fns';


const DateBoard = () => {
  const todayDate = startOfToday();

  return (
    <div>
      <h1>{format(todayDate, 'EEEE')}</h1>
      <h2>{format(todayDate, 'dd')}</h2>
    </div>
  );
}

export default DateBoard;
