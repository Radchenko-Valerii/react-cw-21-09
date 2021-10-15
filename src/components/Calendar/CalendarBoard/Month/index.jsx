import React from 'react';
import { startOfToday, format } from 'date-fns';
import styles from "./month.module.scss"

const Month = () => {
  const todayMonth = startOfToday();

  return (
    <div>
      <h2 className={styles.monthName}>{format(todayMonth, 'MMMM')}</h2>
    </div>
  );
}

export default Month;