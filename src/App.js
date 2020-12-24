import React, { useEffect, useState } from "react"
import NavBar from "./components/NavBar"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';

import Welcome from "./pages/welcome"


//if key does not work. check to see if you have a .env file and its populated with a omdb key
//go to http://www.omdbapi.com/ and request a key if you do not have one. 
const OMDB_KEY = process.env.REACT_APP_OMDB_API_KEY;

const useStyles = makeStyles((theme) => ({
  root:{
    margin: 0,
    padding: 0
    // backgroundColor: "#80deea"
  },

}));

const App = props => {
  const classes = useStyles();

  return (
    <div className="App">
      <Router>
          <NavBar />
          <Container  maxWidth="xl" className={classes.root}>
            <Switch>
              <Route exact path="/">
                  <Welcome />
              </Route>
            </Switch>
          </Container>
      </Router>
    </div>
  );
}

export default App;
