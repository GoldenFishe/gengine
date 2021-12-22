import { Object, ObjectPosition, ObjectSize, ObjectTypes } from "./Object";

export class Character extends Object {
  image: HTMLImageElement;

  constructor(id: string, position: ObjectPosition, size: ObjectSize, sprite: string) {
    super(id, ObjectTypes.CHARACTER, position, size);
    this.image = this.setImage(sprite, size);
  }

  private setImage(sprite: string, size: ObjectSize) {
    const { width, height } = size;
    const image = new Image(width, height);
    image.src = sprite;
    return image;
  }
}