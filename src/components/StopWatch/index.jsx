import React, { Component } from "react";

class StopWatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      counter2 : 0
    };

    this.intervalId = null;
  }

  start = () => {
    if(!this.intervalId){

      this.intervalId = setInterval(() => {
        const { counter, counter2 } = this.state;
        this.setState({
          counter: counter + 1,
        });
        if(counter>59){
          this.setState({
            counter: counter-60,
            counter2: counter2 +1
          })
        }
      }, 1000);
    }
  };

  stop = () => {clearInterval(this.intervalId)
  this.intervalId = null}
  

  componentDidMount(){
    this.start();
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  render() {
    const { counter, counter2} = this.state;
    return (
      <article>
        <h1>{counter2}:{counter}</h1>
        <button onClick={this.start}> go </button>
        <button onClick={this.stop}> stop </button>
      </article>
    );
  }
}

export default StopWatch;
