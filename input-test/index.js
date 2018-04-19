import Cloud from "../team-cotton-galaxy/cloud";
import { Animator, Compositor, Layer, Entity, util, input } from "cotton-js";

class SimpleEntity extends Entity {
    constructor(pos, vel, size) {
        super(pos, vel, size, [], true);
    }

    // do nothing. We just want to see a box
    draw() { }
};

export const runInputTest = function run() {
    const rootEl = document.getElementById('yaboi');
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    const movableEntity = new SimpleEntity(
        new util.Point(0, 0),
        new util.Point(0, 0),
        new util.Point(50, 50)
    );

    const inputHandler = new input.Keyboard(window);
    
    inputHandler.addMapping('ArrowLeft', () => {
        movableEntity.pos.x -= 10;
    });

    inputHandler.addMapping('ArrowRight', () => {
        movableEntity.pos.x += 10;
    });

    inputHandler.addMapping('ArrowUp', () => {
        movableEntity.pos.y -= 10;
    });

    inputHandler.addMapping('ArrowDown', () => {
        movableEntity.pos.y += 10;
    });

    let animator = new Animator(
        new Compositor(
            width,
            height,
            rootEl,
            [new Layer(width, height, [movableEntity])],
        )
    );

    animator.start();
};