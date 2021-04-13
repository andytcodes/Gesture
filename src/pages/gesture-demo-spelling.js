import React, {useState, useRef} from 'react';
import '../styles/fonts.css';
import { LightAccent, MainColor, DarkShade, GreenPass } from '../components/Colors';
import styled from 'styled-components';
import GestureTest from '../components/GestureTest';
import alphabet from '../GestureDefinitions/Alphabet/AlphabetImports';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import {drawHand} from "../utilities";
import * as fp from "fingerpose";
import { Redirect } from 'react-router';

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1B1B22;
  border-radius: 10px;
  margin-bottom: 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

const GestureDemoSpelling = () => {

  //Demo Stuffs
  const images = [alphabet.alphabet_i_img, alphabet.alphabet_l_img, 
    alphabet.alphabet_o_img, alphabet.alphabet_v_img];

  const currentAlphabet = [alphabet.alphabet_I_Gesture, alphabet.alphabet_L_Gesture, 
    alphabet.alphabet_O_Gesture, alphabet.alphabet_V_Gesture];

  //Pass State
  const [colorPass, setColorPass] = useState(LightAccent);
  const [pic, setpic] = useState(0);
  const [letter, setletter] = useState(0);

  //Gesture Stuff
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  //load handpose model
  const runHandpose = async () => {
    const net = await handpose.load()
    console.log('Handpose model loaded.')
    //loop and detect hands
    setInterval(() => {
      if(letter == currentAlphabet.length - 1){
        <Redirect to="/home"/>
      }
      detect(net)
    }, 3000);
  }

  const detect = async (net) =>{
    // Check data is available
    if(typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4)
      {
        // Get video properties
        const video = webcamRef.current.video;
        const videoWidth = video.videoWidth;
        const videoHeight = video.videoHeight;

        // Set video height and width
        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;
        
        // Set canvas height and width
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;

        // Make Detections
        const hand = await net.estimateHands(video);
        //console.log(hand);

        //Gesture Detection
        if (hand.length > 0) {
          const GE = new fp.GestureEstimator([
            //Adding custom gestures
            currentAlphabet[letter]
          ]);

          const gesture = await GE.estimate(hand[0].landmarks, 4);

          if (gesture.gestures !== undefined && gesture.gestures.length > 0) { 
            console.log(gesture.gestures);

            const confidence = gesture.gestures.map(
              (prediction) => prediction.confidence
            );

            const maxConfidence = confidence.indexOf(
              Math.max.apply(null, confidence)
            );
            //setPic(gesture.gestures[maxConfidence].name);
            //console.log(pic);
          }
          setColorPass(GreenPass);
              setletter(letter + 1);
              setpic(pic + 1);
        }

        // Draw mesh
        const ctx = canvasRef.current.getContext("2d");
        drawHand(hand, ctx);
      }

  }

  runHandpose();
  //end Gesture Detections

  return(
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
        alignItems: 'center',
        width: 1000
        }}>
          <h1 style={{
            fontFamily: 'Montserrat',
            fontSize: 48,
            color: MainColor,
            marginTop: 50, //remove if necessary
          }}>
            Spelling: I Love You
          </h1>
          <p style={{
            fontSize: "25px"
          }}>
            In this lesson, you will learn how to spell out the phrase: I Love You.
          </p>

          <div style={{
            display:'grid',
            gridTemplateColumns: "400px 400px",
            gridTemplateRows: "300px",
            justifyContent: 'space-evenly',
            width: 1000
          }}>

            <Card><img src={images[pic]} alt="pic"></img></Card>

            <div>
              <Webcam ref={webcamRef} id="webcam"
              style={{
                width:"360px",
                height:"270px",
                borderRadius: 30,
                borderColor: "#FC9A06",
                borderStyle: "solid",
                borderWidth: 5,
              }}
              />

              <p style={{
              textAlign: 'center',
              fontFamily: 'Montserrat',
              color: colorPass,
              fontSize: '25px'
              }}>Pass</p>

              <canvas
                ref={canvasRef}
                style={{
                  display: 'none',
                  position: "absolute",
                  marginLeft: "auto",
                  marginRight: "auto",
                  textAlign: "center",
                  width:"360px",
                  height:"270px"
                }}/>
            </div>
            
          </div>

        </div>

    </div>
  );
}

export default GestureDemoSpelling;