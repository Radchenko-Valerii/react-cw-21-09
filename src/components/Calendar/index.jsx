import React from 'react';
import Month from '../CalendarBoard/Month';
import NameOfDays from '../CalendarBoard/NamesOfDays';
import Numbers from '../CalendarBoard/Numbers';
import DateBoard from '../DateBoard';
import { startOfToday } from 'date-fns';

const Calendar = () => {
  const currentDay = startOfToday();
  const CalendarContext = React.createContext(currentDay);
  return (
    <CalendarContext.Provider value={currentDay}>
    
      <DateBoard />
      <Month />
      <NameOfDays />
      <Numbers />
    
    </CalendarContext.Provider>
  );
}

export default Calendar;
