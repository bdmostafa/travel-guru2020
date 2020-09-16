import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Area from './components/AreaDetail/AreaDetail';
import AreaDetail from './components/AreaDetail/AreaDetail';

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
