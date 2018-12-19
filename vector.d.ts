type Vector = number & IVector;

declare interface IVector {
    x: number;
    y: number;
    z: number;
    Dot(other: Vector): number;
    Cross(other: Vector): Vector;
    Length(): number;
    Normalized(): Vector;
}

declare function Vector(x?: number, y?: number, z?: number): Vector;