import { Scene } from "./Scene";
import { ObjectTypes } from "./object/Object";
import { Character } from "./object/Character";

export class Renderer {
  private ctx: CanvasRenderingContext2D;
  private scene: Scene;

  constructor(canvas: HTMLCanvasElement) {
    this.scene = new Scene();
    this.ctx = this.getContext(canvas);
  }

  loop() {
    window.requestAnimationFrame(() => {
      this.clear();
      this.draw();
      this.loop();
    });
  }

  setScene(scene: Scene) {
    this.scene = scene;
  }

  private clear() {
    const { width, height } = this.ctx.canvas;
    this.ctx.clearRect(0, 0, width, height);
  }

  private draw() {
    for (let object of this.scene.objects) {
      if (object.type === ObjectTypes.CHARACTER) {
        const character = object as Character;
        this.ctx.drawImage(character.image, character.position.x, character.position.y, character.image.width, character.image.height);
      }
    }
  }

  private getContext(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext("2d");
    if (ctx) return ctx;
    throw new Error("Can't get context from HTMLElement");
  }
}