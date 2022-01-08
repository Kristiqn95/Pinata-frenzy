import { Sprite, Texture } from 'pixi.js';

export default class Chili extends Sprite {
    constructor(){
        super(Texture.from('chili'));

        this.name = 'chili';
        this._create();
        this._destroyed = false;
    }
    /**
     * @private
     */
    _create() {
        this.x = 0;
        this.y = 0;
        this._speed = {
            x: (Math.random() - 0.5),
            y: Math.random() * 5 + 3,
        }
    }
    /**
     * Updates chili position and rotation
     */
    update() {
        if(this.alpha <= 0) {
            if(!this._destroyed) {
                this._destroy();
                this._destroyed = true;
            }
        }
        else {
            this.x += this._speed.x;
            this.y += this._speed.y;
            const dist = Math.sqrt(this.x * this.x + this.y * this.y);
            this.alpha = 1 - dist/500;
            this.rotation += 0.01;
        }
    }
}