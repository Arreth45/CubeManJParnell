var objects;
(function (objects) {
    var Control = (function () {
        function Control(rotationSpeedX, rotationSpeedY, rotationSpeedZ) {
            this.rotationSpeedX = rotationSpeedX;
            this.rotationSpeedY = rotationSpeedY;
            this.rotationSpeedZ = rotationSpeedZ;
        }
        return Control;
    })();
    objects.Control = Control;
})(objects || (objects = {}));
//# sourceMappingURL=control.js.map