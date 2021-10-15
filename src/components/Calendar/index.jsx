import React from 'react';
import Month from './CalendarBoard/Month';
import NameOfDays from './CalendarBoard/NamesOfDays';
import Numbers from './CalendarBoard/Numbers';
import DateBoard from './DateBoard';
import { startOfToday } from 'date-fns';
import styles from "./calendar.module.scss"

const Calendar = () => {
  const currentDay = startOfToday();
  return (
    <div className={styles.calendarWrapper}>
      <DateBoard currentDay={currentDay}/>
      <div className={styles.numbersBoard}>
      <Month currentDay={currentDay}/>
      <NameOfDays currentDay={currentDay}/>
      <Numbers currentDay={currentDay}/>
      </div>
    </div>
    
    
  );
}

export default Calendar;
