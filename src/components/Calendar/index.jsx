import React from 'react';
import Month from '../CalendarBoard/Month';
import NameOfDays from '../CalendarBoard/NamesOfDays';
import DateBoard from '../DateBoard';

const Calendar = () => {
  return (
    <div>
      <DateBoard />
      <Month/>
      <NameOfDays />
    </div>
  );
}

export default Calendar;
