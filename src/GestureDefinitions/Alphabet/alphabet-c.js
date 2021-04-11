//Imports
// Finger, FingerCurl, FingerDirection, GestureDescription
import {Finger, FingerCurl, GestureDescription} from 'fingerpose'; 

export const alphabet_C_Gesture = new GestureDescription('C');

//Thumb
alphabet_C_Gesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);

//Index
alphabet_C_Gesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);

//Middle
alphabet_C_Gesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);

//Ring
alphabet_C_Gesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);

//Pinky
alphabet_C_Gesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);