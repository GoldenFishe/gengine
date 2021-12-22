import { Scene } from "../src/Scene";
import { Renderer } from "../src";
import { Character } from "../src/object/Character";

import mainCharacter from "./assets/main_character.png";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const renderer = new Renderer(canvas);
const scene = new Scene();
const character = new Character("test", { x: 50, y: 50 }, { width: 49, height: 80 }, mainCharacter);

scene.addObject(character);
renderer.setScene(scene);

renderer.loop();