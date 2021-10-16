import React from 'react';
import { startOfToday, format } from 'date-fns';
import styles from "./dateBoard.module.scss";
import { useContext } from 'react/cjs/react.development';
import { CalendarContext } from '../../../contexts';


const DateBoard = () => {
  const [today, setToday] = useContext(CalendarContext)
  return (
    <div className={styles.dateBoardWrapper}>
      <h2 className={styles.dayName}>{format(today, 'EEEE')}</h2>
      <h2 className={styles.date}>{format(today, 'dd')}</h2>
    </div>
  );
}

export default DateBoard;
