/// <reference path="../../typings/tsd.d.ts"/>
// Jake Parnell
// Comp392 - Assignment 1
// Last Modified by: Jake Parnell
// Date Last Modified Jan 28th 2016
var objects;
(function (objects) {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Control = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Control(rotationSpeedx, rotationSpeedy, rotationSpeedz, ambientcolour) {
            this.rotationSpeedx = rotationSpeedx;
            this.rotationSpeedy = rotationSpeedy;
            this.rotationSpeedz = rotationSpeedz;
            this.ambientcolour = ambientcolour;
        }
        return Control;
    })();
    objects.Control = Control;
})(objects || (objects = {}));
//# sourceMappingURL=control.js.map