//Imports
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

export const alphabet_A_Gesture = new GestureDescription('A');

//Thumb
alphabet_A_Gesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
alphabet_A_Gesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.2);

//Index
alphabet_A_Gesture.addCurl(Finger.Index, FingerCurl.FullCurl, 0.9);

//Middle
alphabet_A_Gesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 0.9);

//Ring
alphabet_A_Gesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.9);

//Pinky
alphabet_A_Gesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.9);