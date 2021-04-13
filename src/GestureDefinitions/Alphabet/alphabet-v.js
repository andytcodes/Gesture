//Imports
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

export const alphabet_V_Gesture = new GestureDescription('V');

//Thumb
alphabet_V_Gesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
//Index
alphabet_V_Gesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
alphabet_V_Gesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.1);

//Middle
alphabet_V_Gesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
alphabet_V_Gesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.1);

//Ring
alphabet_V_Gesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.8);

//Pinky
alphabet_V_Gesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.8);