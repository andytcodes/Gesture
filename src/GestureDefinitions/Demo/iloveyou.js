//Imports
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

export const ILU_Gesture = new GestureDescription('ILOVEYOU');

//Thumb
ILU_Gesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ILU_Gesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.25);

//Index
ILU_Gesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);

//Middle
ILU_Gesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);

//Ring
ILU_Gesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);

//Pinky
ILU_Gesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);