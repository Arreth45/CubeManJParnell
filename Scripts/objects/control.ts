module objects {
	export class Control {
		rotationSpeedX: number;
        rotationSpeedY: number;
        rotationSpeedZ: number;
		constructor(rotationSpeedX: number, rotationSpeedY: number, rotationSpeedZ: number) {
			this.rotationSpeedX = rotationSpeedX;
            this.rotationSpeedY = rotationSpeedY;
            this.rotationSpeedZ = rotationSpeedZ;

		}
	}
}
