import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/landingPage"



function App() {
  const [userObject, setUserObject] = useState({
    spotLog: false,
    token: ""
  });

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <LandingPage {...props} userObject={userObject} setUserObject={setUserObject}/>} />
      </Switch>
   </Router>
  );
}

export default App;
