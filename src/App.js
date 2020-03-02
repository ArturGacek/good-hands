import React from 'react';
import {HashRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {
  return (
      <Router>
          <React.Fragment>
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/loginForm" component={Login}/>
                  <Route path="/registerForm" component={Register}/>
              </Switch>
          </React.Fragment>
      </Router>

  );
}

export default App;
