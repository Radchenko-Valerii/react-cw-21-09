import React from 'react';
import { startOfToday, format } from 'date-fns';
import styles from "./month.module.scss"
import { CalendarContext } from '../../../../contexts';
import { useContext } from 'react/cjs/react.development';

const Month = () => {
  const [today, setToday] = useContext(CalendarContext)

  return (
    <div>
      <h2 className={styles.monthName}>{format(today, 'MMMM')}</h2>
    </div>
  );
}

export default Month;