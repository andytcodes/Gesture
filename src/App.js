import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
import Gesture from './Pages/Gesture';

function App() {
  return(
    <Router>
      <Link to="/Gesture">Gesture</Link>
      <Route path="/Gesture" exact component={Gesture}/>
    </Router>
  );
}

export default App;
