//Imports
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

export const alphabet_E_Gesture = new GestureDescription('E');

//Thumb
alphabet_E_Gesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);

//Index
alphabet_E_Gesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);

//Middle
alphabet_E_Gesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);

//Ring
alphabet_E_Gesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);

//Pinky
alphabet_E_Gesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);