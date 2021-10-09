import React, { Component } from "react";
import data from "../../Data";
import styles from "./carusel.module.scss";

class Carusel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      isAutoSlide: false
    };
  }

  prevSlide = () => {
    const { i } = this.state;
    if (i < 1) {
      this.setState({ i: data.length - 1 });
    } else this.setState({ i: i - 1 });
  };

  nextSlide = () => {
    const { i } = this.state;
    if (i >= data.length-1) {
      this.setState({ i: 0 });
    } else this.setState({ i: i + 1 });
  };


  autoslideChanger = () =>{
    const {isAutoSlide} = this.state
    this.setState({isAutoSlide: !isAutoSlide})
  }

  componentDidUpdate(){
    const int = () => setTimeout(()=>{this.nextSlide()}, 5000)
    if(this.state.isAutoSlide){
      int()
    } else {
      clearTimeout(int)
    }
  }

  render() {
    const { i, isAutoSlide} = this.state;
    const { src, description, header } = data[i];
    return (
      <div className={styles.caruselWrapper}>
        <div className={styles.imgWrapper}>
          <button onClick={this.prevSlide} className={styles.prevBtn}>
            {"<"}
          </button>
          <img className={styles.img} src={src} alt="" />
          <button onClick={this.nextSlide} className={styles.nextBtn}>{">"}</button>
        </div>
        <button onClick={this.autoslideChanger} className={styles.autoSlideBtn}>{isAutoSlide ? 'stop' : 'start'} autoslide</button>
        <h1 className={styles.header}>{header}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    );
  }
}

export default Carusel;
