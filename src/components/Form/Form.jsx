import React, { Component } from 'react';
import styles from "./form.module.css"

class Form extends Component {
  constructor(props){
    super(props)

    this.state = {
      login: '',
      password: ''
    };
  }
  

  handleFormSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  }

  handleChange = (e) => {
    const {name} = e.target;
    this.setState({
      [name] : e.target.value
    })
    console.log(e.target.value);
  }
  
  
  
  render() {
    const { login, password} = this.state;
    return (
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={this.handleFormSubmit}>
        <h1>Login</h1>
          <input className={styles.input} onChange={this.handleChange} value={login} name="login" type="text" placeholder="login"/>
          <input className={styles.input} onChange={this.handleChange} value={password} name="password" type="password" placeholder="password"/>
          <button className={styles.btn} type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
