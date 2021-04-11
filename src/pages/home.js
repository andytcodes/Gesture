import React from 'react';
import logo from '../images/Gesture_Logo_05.png';

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <img src={logo} style={{width:300}} alt="Gesture Logo"/>
      <h1>Home</h1>
    </div>
  );
};

export default Home;