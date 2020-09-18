import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import PetCart from './components/PetCart';


function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navigation /> */}

        <Switch>
          <Route path="/" exact>
          <PetCart/>
            /////
            <Login />

          </Route>
          <Route path="/login" exact>

            <Login />

          </Route>
          <Route path="/registration" exact>

            <Registration />

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
