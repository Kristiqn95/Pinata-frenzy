import { Container, Sprite } from 'pixi.js';
import gsap from 'gsap';

export default class Footer extends Container {
    constructor(sprite) {
        super();
        this._body = Sprite.from(sprite);
        this._body.anchor.set(0.5);
        this.addChild(this._body);

        this._body.rotation = -Math.PI / 4;

        this.name = 'cactus';
  
    }
  
    /**
     * Makes cactus dance
     */
    dance() {
        const danceEase = "sine";
        const from = -Math.PI / 4;
        const to = Math.PI / 4;
        const eps = 0.001;
        const dur = 0.3;

        if(Math.abs(this._body.rotation - from) < eps) {
            gsap.to(this._body, {
                rotation: to,
                duration: dur,
                ease: danceEase,
            });
        }
        else if(Math.abs(this._body.rotation - to) < eps) {
            gsap.to(this._body, {
                rotation: from,
                duration: dur,
                ease: danceEase,
            });
        }
    }
  }