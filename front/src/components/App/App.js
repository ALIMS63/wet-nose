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
// import PetCart from '../PetCart';

import PetCart from '../PetCart';
import ModalFilter from '../Filter/ModalFilter';
import Anketa from '../Anketa';
import HomeRoute from '../HomeRoute/HomeRoute';
import UpdateAnimal from '../UpdateAnimal/UpdateAnimal';
import DeleteAnimal from '../DeleteAnimal/DeleteAnimal';


import AnimalCard from '../AnimalCard/AnimalCard';
import OneAnimal from '../OneAnimal/OneAnimal';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

        <Switch>
          <Route path="/" exact>
            {/* <Main /> */}
            <ModalFilter/>
            {/* <Filter/> */}
          
            <Anketa />
            <AnimalCard />
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

          <HomeRoute path="/privateHome" exact>
            <PrivateHome />
          </HomeRoute>

          <Route path="/oneAnimal/:id" exact>
            <OneAnimal />
          </Route>

          <Route path="/update/:id" exact>
            <UpdateAnimal />
          </Route>
          <Route path="/delete/:id" exact>
            <DeleteAnimal />
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
