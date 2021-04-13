//Imports
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

export const alphabet_L_Gesture = new GestureDescription('L');

//Thumb
alphabet_L_Gesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
alphabet_L_Gesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.5);

//Index
alphabet_L_Gesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
alphabet_L_Gesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.9);

//Middle
alphabet_L_Gesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);

//Ring
alphabet_L_Gesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);

//Pinky
alphabet_L_Gesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);