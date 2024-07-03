import './App.css';
import React, {Component } from 'react';
import { BrowserRouter as Router, Route, Link } 
from 'react-router-dom';
import { Switch } from '@mui/material';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { ButtonGroup, Button } from '@mui/material';
import { CircularProgress } from '@mui/material';

class App extends Component {
  render() {
    return (
        <div>
          <h1>Michael Carroll</h1>
          <hr />
          <ButtonGroup variant="text" aria-label="Basic button group">
            <Button href="/">Home</Button>
            <Button href="/about">About</Button>
            <Button href="/contact">Contact</Button>
          </ButtonGroup>
          <hr />
        </div>
    );
  }
}

export default App;
