import React, { Component } from 'react';
import data from '../../Data';
import styles from './carusel.module.scss'

class Carusel extends Component {
  constructor(props){
    super(props);
    this.state ={
      i : 0,
    }
  }
  
  render() {
    const {i} = this.state
    const {src, description, header} = data[i]
    return (
      <div className={styles.caruselWrapper}>
        <div className={styles.imgWrapper}>
          <button className={styles.prevBtn}>{'<'}</button>
          <img className={styles.img} src={src} alt="" />
          <button onClick={()=>{this.setState({i:i+1})}} className={styles.nextBtn}>{'>'}</button>
        </div>
        <h1 className={styles.header}>{header}</h1>
          <p className={styles.description}>{description}</p>
      </div>
    );
  }
}

export default Carusel;
