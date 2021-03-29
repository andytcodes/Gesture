import React, {useRef, useState} from 'react';
//import logo from './logo.svg';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import {drawHand} from "./utilities";
import logo from "./images/Gesture_Logo_05.png";
import './App.css';
import * as fp from "fingerpose";
import victory from "./images/victory.png";
import thumbs_up from "./images/thumbs_up.png";

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  //Gestures
  const [emoji, setEmoji] = useState([]);
  const images = {thumbs_up:thumbs_up, victory:victory};

  //load handpose model
  const runHandpose = async () => {
    const net = await handpose.load()
    console.log('Handpose model loaded.')
    //loop and detect hands
    setInterval(() => {
      detect(net)
    }, 50);
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
            fp.Gestures.VictoryGesture,
            fp.Gestures.ThumbsUpGesture,
          ]);

          const gesture = await GE.estimate(hand[0].landmarks, 4);

          if (gesture.gestures !== undefined && gesture.gestures.length > 0) {  
            const confidence = gesture.gestures.map(
              (prediction) => prediction.confidence
            );

            const maxConfidence = confidence.indexOf(
              Math.max.apply(null, confidence)
            );

            setEmoji(gesture.gestures[maxConfidence].name);
            console.log(emoji);
          }
        }

        // Draw mesh
        const ctx = canvasRef.current.getContext("2d");
        drawHand(hand, ctx);
      }

  }

  runHandpose();

  return (
    <div className="App">
      <img src={logo} alt="logo"
      style={{
        width:300,
        paddingTop: 150,
        position:'fixed',
        marginLeft:"auto",
        marginRight:"auto",
        left:0,
        right:0
      }}/>
      <header className="App-header">

       <Webcam ref={webcamRef}
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
         height:480
        }}/>
        
        {/* emoji set */}
        {emoji !== null ? (
          <img
            src={images[emoji]}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 400,
              bottom: 500,
              right: 0,
              textAlign: "center",
              height: 100,
            }}
          /> ) : ("")}

      </header>
    </div>
  );
}

export default App;
