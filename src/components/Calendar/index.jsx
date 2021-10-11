import React from 'react';
import Month from '../CalendarBoard/Month';
import NameOfDays from '../CalendarBoard/NamesOfDays';
import Numbers from '../CalendarBoard/Numbers';
import DateBoard from '../DateBoard';

const Calendar = () => {
  return (
    <div>
      <DateBoard />
      <Month/>
      <NameOfDays />
      <Numbers />
    </div>
  );
}

export default Calendar;
