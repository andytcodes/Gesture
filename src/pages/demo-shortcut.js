import React, {useState} from 'react';
import '../styles/fonts.css';
import { LightAccent, MainColor, DarkShade, GreenPass } from '../components/Colors';
import styled from 'styled-components';
import GestureTest from '../components/GestureTest';
import Gesture from '../components/Gesture';
import {ILU_Gesture} from '../GestureDefinitions/Demo/iloveyou';
import iloveyou from '../images/iloveyou.png';

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1B1B22;
  width: 130px;
  height: 100px;
  border-radius: 10px;
  margin-bottom: 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

export default function DemoShortcut() {

  return(
    <>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>

        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 1000
        }}>
          <h1 style={{
            fontFamily: 'Montserrat',
            fontSize: 48,
            color: MainColor,
            marginTop: 50, //remove if necessary
          }}>
            Shortcut: I Love You
          </h1>
          <p style={{
            fontSize: "25px"
          }}>
            In this lesson, you will learn how to use the shortcut for the phrase: I Love You
          </p>

          <div style={{
            display:'flex',
            justifyContent: 'center',
            width: 1000
          }}>
            <Card><img src={iloveyou} alt="pic" style={{width: '93px'}}></img></Card>
          </div>

            
        </div>

    </div>
    <Gesture/>
    </>
  );
}
