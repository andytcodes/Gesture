//Imports
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

export const alphabet_O_Gesture = new GestureDescription('O');

//Thumb
alphabet_O_Gesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.8);
alphabet_O_Gesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.2);

//Index
alphabet_O_Gesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
alphabet_O_Gesture.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.2);

//Middle
alphabet_O_Gesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
alphabet_O_Gesture.addDirection(Finger.Middle, FingerDirection.DiagonalDownRight, 0.2);

//Ring
alphabet_O_Gesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
alphabet_O_Gesture.addDirection(Finger.Ring, FingerDirection.DiagonalDownRight, 0.2);

//Pinky
alphabet_O_Gesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
alphabet_O_Gesture.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 0.2);