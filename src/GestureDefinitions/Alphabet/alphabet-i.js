//Imports
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

export const alphabet_I_Gesture = new GestureDescription('I');

//Thumb
alphabet_I_Gesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);

//Index
alphabet_I_Gesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);

//Middle
alphabet_I_Gesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);

//Ring
alphabet_I_Gesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);

//Pinky
alphabet_I_Gesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
alphabet_I_Gesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.8);