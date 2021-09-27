import React, { Component } from 'react';
import data from '../../Data';
import styles from './carusel.module.scss'

class Carusel extends Component {
  render() {
    const {src} = data[0]
    return (
      <div >
        <div className={styles.imgWrapper}>
          <button className={styles.prevBtn}>{'<'}</button>
          <img className={styles.img} src={src} alt="" />
          <button className={styles.nextBtn}>{'>'}</button>
        </div>
          <p className='sa'>asdfsdfhsbhfbhsbfsdbfhsdbfbsdbhfab</p>

      </div>
    );
  }
}

export default Carusel;
