import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path="/" exact>
            <Navigation />
          </Route>

          <Route path="/login" exact>
            <Login />
          </Route>

          <Route path="/registration" exact>
            <Registration />
          </Route>

          <Route path="/home" exact>
            <Home />
          </Route>
          {/* <PrivateRouter path="/user/:id" exact> */}

          {/* <User></User> */}

          {/* </PrivateRouter>
          <PrivateRouter path="/user/:id/game" exact> */}

          {/* <TableCards /> */}

        </Switch>
      </Router>
    </div>
  );
}

export default App;
