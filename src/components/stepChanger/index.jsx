import React, { Component } from 'react';

class StepChanger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: this.props.step,
    };
  }

  addStep = () => {
    this.setState((state, props)=>({
      step: state.step + 1
    }))
  }

  unStep = () =>{
    this.setState(()=>({
      step: this.state.step - 1
    }))
  }

  
  render() {
    const {step} = this.state
    console.log(this.state.step)
    return (
      <div>
        <p>значение счетчика будет изменено на {step}</p>
        <button className="changeBtn" onClick={this.addStep}>+</button>
        <button className="changeBtn" onClick={this.unStep}>-</button>
      </div>
    );
  }
}

export default StepChanger;
