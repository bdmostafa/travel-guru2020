import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'react-datepicker/dist/react-datepicker.css';
import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/area/:areaName">
          <Booking />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    
  </Router>
  );
}

export default App;
