import './App.css';
import Home from './components/Home/Home';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SingleBreedDetails from './components/SingleBreedDetails/SingleBreedDetails';
import Breeds from './components/Breeds/Breeds';
import Breed from './components/Breed/Breed';
import Contact from './components/Contcat/Contact';
import Navigation from './components/Navigation/Navigation';
import NotFound from './components/NotFound/NotFound';

export const userContext = createContext();


function App() {
  const[allBreed,setAllBreed]= useState([]);

  return (
    <userContext.Provider value={[allBreed, setAllBreed]}>
       <Router>
           <Navigation></Navigation>
            <Switch>
                <Route path="/home">
                  <Home></Home>
                </Route>
                <Route path="/contact">
                  <Contact></Contact>
                </Route>
                <Route path="/breeds">
                   <Breeds></Breeds>
                </Route>
                <Route path="/breed">
                  <Breed></Breed>
                </Route>
                <Route path="/single/:singleId">
                   <SingleBreedDetails></SingleBreedDetails>
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route  path="*">
                  <NotFound></NotFound>
                </Route>
            </Switch>
       </Router>
    </userContext.Provider>
  );
}

export default App;
