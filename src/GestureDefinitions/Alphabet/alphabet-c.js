//Imports
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

export const alphabet_C_Gesture = new GestureDescription('C');

//Thumb
alphabet_C_Gesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
alphabet_C_Gesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

//Index
alphabet_C_Gesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
alphabet_C_Gesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

//Middle
alphabet_C_Gesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
alphabet_C_Gesture.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);

//Ring
alphabet_C_Gesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
alphabet_C_Gesture.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);

//Pinky
alphabet_C_Gesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);
alphabet_C_Gesture.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 1.0);