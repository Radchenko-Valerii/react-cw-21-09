import { Component } from "react";
import "./clicker.css";

class Clicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clickAmount: 0,
    };
  }

  handleClick = () => {
    const { clickAmount } = this.state;
    const { step } = this.props;

    this.setState(() => ({
      clickAmount: clickAmount + step,
    }));
  };

  render() {
    const { clickAmount } = this.state;

    return (
      <div>
        <h1 className="clickerText">Счетчик: {clickAmount}</h1>
        <button className="addBtn" onClick={this.handleClick}>
          Добавить
        </button>
      </div>
    );
  }
}

export default Clicker;
