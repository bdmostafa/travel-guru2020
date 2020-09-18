import React, { createContext, useState } from 'react';
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
import Listings from './components/Listings/Listings';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [user, setUser] = useState({
    isSignedIn: false,
    fName: '',
    lName: '',
    email: '',
    password: '',
    cPassword: '',
    error: '',
    success: false
});
  return (
    <UserContext.Provider value={{loggedUser: [loggedInUser, setLoggedInUser], userState: [user, setUser]}}>
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
          <PrivateRoute path="/listings/:areaName">
            <Listings />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
