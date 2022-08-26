import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/index';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
