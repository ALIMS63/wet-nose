import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import ModalLogin from '../Login/ModalLogin'
import ModalRegister from '../Registration/ModalRegister'
import Filter from '../Filter/Filter'


function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navigation /> */}

        <Switch>
          
          <Route path="/login" exact>
            <Login />
          </Route>
          
          <Route path="/registration" exact>
            <Registration />
          </Route>

          <Route path="/" exact>
          <ModalRegister />
            <ModalLogin />
            <Filter/>
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
