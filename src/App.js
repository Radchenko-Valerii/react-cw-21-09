import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ToDoPage from './pages/ToDoPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';


const App = () => {

  return (

    <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/login"> Login </Link>
        </li>
        <li>
        <Link to="/registration"> Registration </Link>
        </li>
        <li>
        <Link to="/toDoPage"> ToDo </Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/login" component={LoginPage}/>
      <Route path="/registration" component={RegistrationPage}/>
      <Route path="/toDoPage" component={ToDoPage}/>
    </Switch>
    </BrowserRouter>
  )
}

export default App;
