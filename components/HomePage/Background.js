import React, { useEffect, useRef } from 'react';

const ParticleSketch = () => {
    const canvasRef = useRef();

    useEffect(() => {
        const p5 = require('p5');

        const sketch = (p) => {
            class Particle {
                constructor() {
                    this.x = p.random(0, p.width);
                    this.y = p.random(0, p.height);
                    this.r = p.random(0.1, 3);
                    this.xSpeed = p.random(-1, 1);
                    this.ySpeed = p.random(-1, 1);
                }

                createParticle() {
                    p.noStroke();
                    p.fill('#F9FBB2');
                    p.circle(this.x, this.y, this.r);
                }

                moveParticle() {
                    if (this.x < 0 || this.x > p.width) this.xSpeed *= -1;
                    if (this.y < 0 || this.y > p.height) this.ySpeed *= -1;
                    this.x += this.xSpeed;
                    this.y += this.ySpeed;
                }

                joinParticles(particles) {
                    particles.forEach((element) => {
                        let dis = p.dist(this.x, this.y, element.x, element.y);
                        if (dis < 150) {
                            p.stroke('rgba(88, 111, 124, 0.2)');
                            p.line(this.x, this.y, element.x, element.y);
                        }
                    });
                }
            }

            let particles = [];

            p.setup = () => {
                p.createCanvas(window.innerWidth, window.innerHeight);
                p.pixelDensity(1);
                p.frameRate(30);

                for (let i = 0; i <= p.width / 25; i++) {
                    particles.push(new Particle());
                }
            };

            p.draw = () => {
                // Set background color to black
                p.background('#131318');

                for (let i = 0; i < particles.length; i++) {
                    particles[i].createParticle();
                    particles[i].moveParticle();
                    particles[i].joinParticles(particles.slice(i));
                }
            };
        };

        const myp5 = new p5(sketch);

        return () => {
            myp5.remove();
        };

    }, []);

    return (
        <div ref={canvasRef} style={{width:'100%', height:'100%'}}></div>
    );
};

export default ParticleSketch;
