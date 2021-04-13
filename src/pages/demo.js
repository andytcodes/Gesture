import React from 'react';
import '../styles/fonts.css';
import { LightAccent, MainColor, DarkShade } from '../components/Colors';
import styled from 'styled-components';

/* 
Demonstration purposes only. 
Have to generate title and categories 
according to user learning path
*/

const Button = styled.a`
  font-family: 'Montserrat', sans-serif;
  color: #1C242F;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 20px;
  &:hover {
    transition: color 0.3s ease;
    color: #FC9A06;
    cursor: pointer;
  }
`;

const Lesson = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1B1B22;
  border-radius: 10px;
  margin-bottom: 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  &:hover{
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    color: #fff;
    background-color: #FC9A06;
    cursor: pointer;
  }
`;

const DemoLesson = () => {
  return(
    <div style={{
      display: "grid",
      gridTemplateColumns: "300px 300px 300px",
      gridTemplateRows: "155px 155px 155px",
      justifyContent: 'space-between'
    }}>
      <a href="/home/demo/demo-spelling" style={{ textDecoration: "none" }}>
        <Lesson style={{height: "134px"}}>Spelling I Love You</Lesson>
      </a>
      <a href="/home/demo/demo-shortcut" style={{ textDecoration: "none" }}>
        <Lesson style={{height: "134px"}}>Shortcut for I Love You</Lesson>
      </a>
    </div>
  );
};

const Demo = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '90vh'
      }}>

        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
        }}>
          <h1 style={{
            fontFamily: 'Montserrat',
            fontSize: 48,
            color: MainColor,
            marginTop: 50, //remove if necessary
          }}>
            Demo: I Love You
          </h1>
        </div>
        
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: 1000
        }}>
          <h2 style={{
            fontFamily: 'Montserrat',
            color: LightAccent
          }}>
            <Button href="/home">
            Back
            </Button> <br/>
            Lessons
          </h2>    
          <DemoLesson/>      
        </div>
    </div>
  );
};

export default Demo;