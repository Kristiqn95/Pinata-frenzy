import { Container, Sprite } from 'pixi.js';
import gsap from 'gsap';
import Particle from './Particle';
import Chili from './Chili';

export default class Pinata extends Container {
    constructor() {
        super();
        
        this._elements = new Container();
        this.addChild(this._elements);

        this._body = Sprite.from('pinata');
        this._body.anchor.set(0.5);
        this.addChild(this._body);

        this._body.rotation = -Math.PI / 4;

        this.interactive = true;
        this.buttonMode = true;
        this.name = 'pinata';

        this.particles = [];

        this.addListener('click', () => {
            const chili = new Chili();
            this._elements.addChild(chili);
            setInterval(()=>chili.update(),25);
        });

        for(let i = 0; i < 20; i++) {
            this.particles.push(new Particle());
            this._elements.addChild(this.particles[i]);
            setInterval(()=>this.particles[i].update(),25);
        }
  
    }
  
    /**
     * Makes pinata dance
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