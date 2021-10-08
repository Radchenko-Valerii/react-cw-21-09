import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Component } from "react";
import StopWatch from "./components/StopWatch";
import Carusel from './components/Carusel';




class App extends Component {
  render() { return  <BrowserRouter>
  <nav>
    <ul>
      <li>
      <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/Stopwatch">Stopwatch</Link>
      </li>
    </ul>
  </nav>
  <Switch>
    <Route path="/Stopwatch"> 
    <StopWatch/>
    </Route>
    <Route exact path="/"> 
    <Carusel/>
    </Route>
    <Route path="/"> 
    <StopWatch/>
    </Route>
  </Switch>
  </BrowserRouter>
  }
}

export default App;
