//Imports
// Finger, FingerCurl, FingerDirection, GestureDescription
import {Finger, FingerCurl, GestureDescription} from 'fingerpose'; 

export const alphabet_B_Gesture = new GestureDescription('B');

//Thumb
alphabet_B_Gesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);

//Index
alphabet_B_Gesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);

//Middle
alphabet_B_Gesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);

//Ring
alphabet_B_Gesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);

//Pinky
alphabet_B_Gesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);