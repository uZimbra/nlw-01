import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreateColectPoint from './pages/CreateColectPoint';

const Routes = () => {
  return(
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={CreateColectPoint} path="/create-colect-point"/>
    </BrowserRouter>
  );
}

export default Routes;