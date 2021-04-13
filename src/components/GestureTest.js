import React, {useRef, useState} from 'react';
//import logo from './logo.svg';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import {drawHand} from "../utilities";
import * as fp from "fingerpose";
import alphabet from "../GestureDefinitions/Alphabet/AlphabetImports";
import '../styles/Gesture.css';
import { GreenPass, LightAccent } from './Colors';

export default function GestureTest() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  //Pass State
  const [colorPass, setColorPass] = useState(LightAccent);

  //Gestures
 // const [pic, setPic] = useState([]);

  //load handpose model
  const runHandpose = async () => {
    const net = await handpose.load()
    console.log('Handpose model loaded.')
    //loop and detect hands
    setInterval(() => {
      detect(net)
    }, 1000);
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
             setColorPass(GreenPass); 
            //setPic(gesture.gestures[maxConfidence].name);
            //console.log();
          }
        }

        // Draw mesh
        const ctx = canvasRef.current.getContext("2d");
        drawHand(hand, ctx);
      }

  }

  runHandpose();

  return (
    <div>
       <Webcam ref={webcamRef} id="webcam"
       style={{
         position:"absolute",
         marginLeft:"auto",
         marginRight:"auto",
         left:0,
         right:0,
         textAlign:"center",
         zindex:9,
         width:640,
         height:480,
         borderRadius: 30,
         borderColor: "#FC9A06",
         borderStyle: "solid",
         borderWidth: 5
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
          position:"absolute",
         marginLeft:"auto",
         marginRight:"auto",
         left:0,
         right:0,
         textAlign:"center",
         zindex:9,
         width:640,
         height:350
        }}/>
    </div>
  );
}

