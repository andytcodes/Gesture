//Imports
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

export const alphabet_D_Gesture = new GestureDescription('D');

//Thumb
alphabet_D_Gesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);

//Index
alphabet_D_Gesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
alphabet_D_Gesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.8);
alphabet_D_Gesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.5);

//Middle
alphabet_D_Gesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);

//Ring
alphabet_D_Gesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);

//Pinky
alphabet_D_Gesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);