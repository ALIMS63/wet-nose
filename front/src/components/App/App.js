import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import Navigation from '../Navigation/Navigation';
import PrivateHome from '../PrivateHome/PrivateHome';
import Logout from '../Logout/Logout';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Secret from '../Secret/Secret';
import Main from '../Main/Main';
import ModalLogin from '../Login/ModalLogin';
import ModalRegister from '../Registration/ModalRegister';
import Filter from '../Filter/Filter'
import NewAnimal from '../NewAnimal/NewAnimal';
import PetCart from '../PetCart';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

        <Switch>
          <Route path="/" exact>
            <Main />
            <Filter/>
            <PetCart/>
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
            <NewAnimal />
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
