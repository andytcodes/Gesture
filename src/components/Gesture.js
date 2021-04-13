import React, {useRef, useState} from 'react';
//import logo from './logo.svg';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import {drawHand} from "../utilities";
import logo from "../images/Gesture_Logo_05.png";
import * as fp from "fingerpose";
import alphabet from "../GestureDefinitions/Alphabet/AlphabetImports";
import '../styles/Gesture.css';
import {ILU_Gesture} from '../GestureDefinitions/Demo/iloveyou';
import iloveyou from '../images/iloveyou.png';

export default function Gesture() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  //Gestures
  const [pic, setPic] = useState([]);
  const images = {A:alphabet.alphabet_a_img, B:alphabet.alphabet_b_img, 
    C:alphabet.alphabet_c_img, D:alphabet.alphabet_d_img, E:alphabet.alphabet_e_img,
    I:alphabet.alphabet_i_img, L:alphabet.alphabet_l_img, O:alphabet.alphabet_o_img, 
    U:alphabet.alphabet_u_img, V:alphabet.alphabet_v_img, Y:alphabet.alphabet_y_img,
    ILOVEYOU:iloveyou};

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
            alphabet.alphabet_A_Gesture,
            alphabet.alphabet_B_Gesture,
            alphabet.alphabet_C_Gesture,
            alphabet.alphabet_D_Gesture,
            alphabet.alphabet_E_Gesture,
            alphabet.alphabet_I_Gesture,
            alphabet.alphabet_L_Gesture,
            alphabet.alphabet_O_Gesture,
            alphabet.alphabet_U_Gesture,
            alphabet.alphabet_V_Gesture,
            alphabet.alphabet_Y_Gesture,
            ILU_Gesture
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

            setPic(gesture.gestures[maxConfidence].name);
            console.log(pic);
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
      {/*<img src={logo} alt="logo" className="logo"
      style={{
        width:300,
        paddingTop: 300,
        position:'fixed',
        marginLeft:"auto",
        marginRight:"auto",
        left:0,
        right:0
      }}/>*/}

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
        {pic !== null ? (
          <img
            src={images[pic]}
            style={{
              position: 'absolute',
              marginLeft: "auto",
              marginRight: "auto",
              left: 400,
              bottom: 420,
              right: 0,
              zindex: 9,
              textAlign: "center",
              height: 100,
            }}
          /> ) : ("")}
    </div>
  );
}