import React from 'react';
import Month from './CalendarBoard/Month';
import NameOfDays from './CalendarBoard/NamesOfDays';
import Numbers from './CalendarBoard/Numbers';
import DateBoard from './DateBoard';
import { startOfToday } from 'date-fns';

const Calendar = () => {
  const currentDay = startOfToday();
  return (
    <div>
      <DateBoard currentDay={currentDay}/>
      <Month currentDay={currentDay}/>
      <NameOfDays currentDay={currentDay}/>
      <Numbers currentDay={currentDay}/>

    </div>
    
    
  );
}

export default Calendar;
