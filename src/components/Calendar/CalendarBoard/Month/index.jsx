import React from 'react';
import { startOfToday, format } from 'date-fns';


const Month = () => {
  const todayMonth = startOfToday();

  return (
    <div>
      <h2>{format(todayMonth, 'MMMM')}</h2>
    </div>
  );
}

export default Month;