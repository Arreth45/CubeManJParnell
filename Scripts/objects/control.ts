/// <reference path="../../typings/tsd.d.ts"/>

// Jake Parnell
// Comp392 - Assignment 1
// Last Modified by: Jake Parnell
// Date Last Modified Jan 28th 2016

module objects {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Control { 
        //PUBLIC INSTANCE VARIABLES +++++++++++++++++++++++++++
        public rotationSpeedx: number;
        public rotationSpeedy: number;
        public rotationSpeedz: number; 
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(rotationSpeedx: number, rotationSpeedy: number, rotationSpeedz: number) {
            this.rotationSpeedx = rotationSpeedx;
            this.rotationSpeedy = rotationSpeedy;
            this.rotationSpeedz = rotationSpeedz;
        }
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
    }
}
