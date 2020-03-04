import React from 'react';
import {HashRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import LogOut from "./components/LogOut";



function App() {
  return (
      <Router>
          <React.Fragment>
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/LoginForm" component={Login}/>
                  <Route path="/RegisterForm" component={Register}/>
                  <Route path="/LogOut" component={LogOut}/>
              </Switch>
          </React.Fragment>
      </Router>

  );
}

export default App;
