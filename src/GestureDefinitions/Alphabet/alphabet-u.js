//Imports
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

export const alphabet_U_Gesture = new GestureDescription('U');

//Thumb
alphabet_U_Gesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
//Index
alphabet_U_Gesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
alphabet_U_Gesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

//Middle
alphabet_U_Gesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
alphabet_U_Gesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

//Ring
alphabet_U_Gesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);

//Pinky
alphabet_U_Gesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);