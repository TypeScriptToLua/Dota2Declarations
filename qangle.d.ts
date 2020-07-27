type QAngle = number & IQAngle;

declare interface IQAngle {
    x: number;
    y: number;
    z: number;
    Left(): Vector;
    Forward(): Vector;
    Up(): Vector;
}

declare function QAngle(this: void, x?: number, y?: number, z?: number): QAngle;