import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Link, Switch} from "react-router-dom";
import Gesture from './components/Gesture';
import NavBar from './components/NavBar';
import Home from './pages/home';
import Demo from './pages/demo';
import GestureDemoSpelling from './pages/gesture-demo-spelling';
import DemoSpelling from './pages/demo-spelling';
import alphabet from './GestureDefinitions/Alphabet/AlphabetImports';
import DemoShortcut from './pages/demo-shortcut';
import { LightAccent, MainColor } from './components/Colors';
import styled from 'styled-components';

const Anchor = styled.a`
  color: #A2A3AA;
  transition: color 0.2s ease;  
  &:hover{
    transition: color 0.2s ease;
    color: #FC9A06;
  }
`;


function App() {
  return(
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact></Route>
          <Route path="/Gesture" component={Gesture}/>
          <Route path="/home" exact component={Home}/>
          <Route path="/home/demo" exact component={Demo}/>
          <Route path="/home/demo/demo-spelling" component={DemoSpelling}/>
          <Route path="/home/demo/demo-shortcut" component={DemoShortcut}/>
        </Switch>
      </Router>

      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
        <h1 style={{fontSize: '50px'}}>Go To 
        <Anchor href="/home" style={{
          cursor: 'pointer',
          textDecoration: 'none'
        }}> Home</Anchor></h1>
      </div>
    </>
  );
}
// <Gesture/>
export default App;
