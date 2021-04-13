//Imports
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

export const alphabet_Y_Gesture = new GestureDescription('Y');

//Thumb
alphabet_Y_Gesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
alphabet_Y_Gesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.8);

//Index
alphabet_Y_Gesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);

//Middle
alphabet_Y_Gesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);

//Ring
alphabet_Y_Gesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);

//Pinky
alphabet_Y_Gesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
alphabet_Y_Gesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.8);