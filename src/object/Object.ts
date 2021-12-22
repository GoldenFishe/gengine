export type ObjectPosition = {
  x: number;
  y: number;
}

export type ObjectSize = {
  width: number;
  height: number;
}

export enum ObjectTypes {
  CHARACTER
}

export abstract class Object {
  id: string;
  type: ObjectTypes;
  position: ObjectPosition;
  size: ObjectSize;

  protected constructor(id: string, type: ObjectTypes, position: ObjectPosition, size: ObjectSize) {
    this.id = id;
    this.type = type;
    this.position = position;
    this.size = size;
  }
}