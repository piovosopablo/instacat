import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Main from '../components/Main';
import Home from './Home';
import Search from './Search';
import Favorites from './Favorites';
import NotFound from './NotFound';

import '../assets/styles/App.css';

// Enrutado a los componentes Home, Search & Favorites
const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/favorites' component={Favorites} />
          <Route component={NotFound} />
        </Switch>
      </Main>
    </>
  );
};

export default App;
