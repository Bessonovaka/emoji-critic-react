import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Header from './Header';
import Reviews from './Reviews';
import AboutMe from './AboutMe';

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/">
        <Dashboard />
      </Route>
      <Route path="/reviews">
        <Reviews />
      </Route>
      <Route path="/about-me">
        <AboutMe />
      </Route>
    </div>
  );
}

export default App;

