import React from 'react';
import { format } from 'date-fns';
import styles from "./dateBoard.module.scss";
import { useContext } from 'react/cjs/react.development';
import { CalendarContext } from '../../../contexts';


const DateBoard = () => {
  const [ , , selected] = useContext(CalendarContext)
  return (
    <div className={styles.dateBoardWrapper}>
      <h2 className={styles.dayName}>{format(selected, 'EEEE')}</h2>
      <h2 className={styles.date}>{format(selected, 'dd')}</h2>
    </div>
  );
}

export default DateBoard;
