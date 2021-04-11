import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Link, Switch} from "react-router-dom";
import Gesture from './components/Gesture';
import NavBar from './components/NavBar';
import Home from './pages/home';

function App() {
  return(
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact omponent={App}></Route>
          <Route path="/Gesture" component={Gesture}/>
          <Route path="/home" component={Home}/>
        </Switch>
      </Router>
    </>
  );
}
// <Gesture/>
export default App;
