import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import Navigation from '../Navigation/Navigation';
import PersonalPage from '../PersonalPage/PersonalPage';
import Logout from '../Logout/Logout';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Secret from '../Secret/Secret';
import Main from '../Main/Main';
import Filter from '../Filter/Filter'
import NewAnimal from '../NewAnimal/NewAnimal';
import ModalFilter from '../Filter/ModalFilter';
import Anketa from '../Anketa';
import HomeRoute from '../HomeRoute/HomeRoute';
import UpdateAnimal from '../UpdateAnimal/UpdateAnimal';
import AnimalCard from '../AnimalCard/AnimalCard';
import OneAnimal from '../OneAnimal/OneAnimal';

import Nav from '../Navigation/Nav';


function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navigation /> */}
        <Nav />
        {/* <Main/> */}

        <Switch>
          <Route path="/" exact>
            <ModalFilter />
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

          <HomeRoute path="/personalPage" exact>
            <PersonalPage />
          </HomeRoute>

          <Route path="/oneAnimal/:id" exact>
            <OneAnimal />
          </Route>

          <Route path="/update/:id" exact>
            <UpdateAnimal />
          </Route>

          <Route path="/secret">
            <NewAnimal />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
