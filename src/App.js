import React, { useEffect, useState } from "react"
import AppBar from "./components/appBar"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import Welcome from "./pages/welcome"


//if key does not work. check to see if you have a .env file and its populated with a omdb key
//go to http://www.omdbapi.com/ and request a key if you do not have one. 
const OMDB_KEY = process.env.REACT_APP_OMDB_API_KEY;

const App = () => {

  return (
    <div className="App">
      <Router>
          <AppBar />
          <Switch>
            <Route exact path="/">
                <Welcome />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
