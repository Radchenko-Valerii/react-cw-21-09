
import { Component } from "react";
import Clicker from "./components/clicker";
import StepChanger from "./components/stepChanger"



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
    };
  }

  setStep = (stepvalue) =>{
    this.setState({
      step: this.props.step
    })
  }

  render() {
    const {step} = this.state
    return <div>
      <Clicker step={step}/>
      <StepChanger step={step} setStep={this.setStep} />

    </div>;
  }
}

export default App;
