import React from 'react';
import { startOfToday, format } from 'date-fns';
import styles from "./dateBoard.module.scss";


const DateBoard = () => {
  const todayDate = startOfToday();

  return (
    <div className={styles.dateBoardWrapper}>
      <h2 className={styles.dayName}>{format(todayDate, 'EEEE')}</h2>
      <h2 className={styles.date}>{format(todayDate, 'dd')}</h2>
    </div>
  );
}

export default DateBoard;
