import { Object } from "./object/Object";

export class Scene {
  objects: Object[];

  constructor() {
    this.objects = [];
  }

  addObject(object: Object) {
    this.objects.push(object);
  }
}