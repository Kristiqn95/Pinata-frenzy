import { Graphics } from 'pixi.js';

export default class Particle extends Graphics {
    constructor() {
        super();

        this.name = 'particle';

        this.beginFill(0xff0000);
        this.drawCircle(0, 0, 5);
        this.endFill();

        this._create();
    }
    /**
     * @private
     */
    _create() {
        this.x = 0;
        this.y = 0;
        this._speed = {
            x: (Math.random() - 0.5),
            y: Math.random() * 4 + 0.5,
        }
        this.width = Math.random() * 10;
        this.height = this.width;
    }
    /**
     * Updates particle position
     */
    update() {
        this.x += this._speed.x;
        this.y += this._speed.y;
        const dist = Math.sqrt(this.x * this.x + this.y * this.y);
        this.alpha = 1 - dist/500;
        if(this.alpha <= 0) {
            this._create();
        }
    }
}