import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AreaDetail from './components/AreaDetail/AreaDetail';
import 'react-datepicker/dist/react-datepicker.css';

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
          <AreaDetail />
        </Route>
      </Switch>
    
  </Router>
  );
}

export default App;
