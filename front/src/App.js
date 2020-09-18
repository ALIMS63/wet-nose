import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Navigation from './components/Navigation/Navigation';
import PrivateHome from './components/PrivateHome/PrivateHome';
import Logout from './components/Logout/Logout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Secret from './components/Secret/Secret';
import Main from './components/Main/Main';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>

          <Route path="/login" exact>
            <Login />
          </Route>

          <Route path="/registration" exact>
            <Registration />
          </Route>

          <Route path="/logout" exact>
            <Logout />
          </Route>

          <Route path="/privateHome" exact>
            <PrivateHome />
          </Route>
          <PrivateRoute path="/secret">
            <Secret />
          </PrivateRoute>

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
