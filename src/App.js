import React from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import './App.css';
import LoginScreen from '../src/Screens/LoginScreen'
import RegisterScreen from '../src/Screens/RegisterScreen'
import HomeScreen from '../src/Screens/HomeScreen'
import createExam from '../src/Screens/createExam'

function App() {
  return (
    <Router>
    <Switch>
      <Route  exact path="/" component={LoginScreen} />
      <Route   exact path="/register" component={RegisterScreen} />
      <Route   exact path="/home" component={HomeScreen} />
      <Route   exact path="/cExams" component={createExam} />
    </Switch>
    </Router>
  );
}

export default App;
