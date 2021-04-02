import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Gesture from './Pages/Gesture';

function App() {
  return(
    <Router>
      <Route path="/Gesture" component={Gesture}/>
    </Router>
  );
}

export default App;
