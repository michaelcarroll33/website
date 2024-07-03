import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } 
from 'react-router-dom';
import { Switch, Typography } from '@mui/material';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Box, ButtonGroup, Button, IconButton, AppBar, Toolbar, Container } from '@mui/material';


class App extends Component {
  render() {
    return (
        <div>
          <h1>Michael Carroll</h1>
          <AppBar position="static">
            <Container maxWidth="x1">
              <Toolbar disableGutters>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu">

                  </Typography>
                  <Box s={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    // onClick={handleOpenNavMenu}
                    color="inherit">
                    </IconButton>
                  </Box>
              </Toolbar>
            </Container>
          </AppBar>
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
