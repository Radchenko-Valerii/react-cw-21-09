import React from 'react';
import { useContext } from 'react';
import Month from './CalendarBoard/Month';
import NameOfDays from './CalendarBoard/NamesOfDays';
import Numbers from './CalendarBoard/Numbers';
import DateBoard from './DateBoard';
import styles from "./calendar.module.scss"
import { CalendarContext } from '../../contexts';

const Calendar = () => {
  const [today] = useContext(CalendarContext)
  return (
    <div className={styles.calendarWrapper}>
      <DateBoard currentDay={today}/>
      <div className={styles.numbersBoardWrapper}>
      <div className={styles.numbersBoard}>
      <Month currentDay={today}/>
      <NameOfDays currentDay={today}/>
      <Numbers currentDay={today}/>
      </div>
      </div>
    </div>
    
    
  );
}

export default Calendar;
