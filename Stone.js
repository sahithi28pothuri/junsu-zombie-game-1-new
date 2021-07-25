class Stone{
    constructor(x,y,r){
        var opt = {
            isStatic:false,
            restitution: 0.05,
            friction: 0.2,
            density: 0.1,
        }
        this.body = Bodies.circle(x, y, r, opt);
        this.r=RADIUS;
        World.add(world, this.body);
    }
    show() {
        let pos = this.body.position;
        push();
        rectMode(CENTER);
        noStroke();
        fill(148,127,146);
        ellipse(pos.x,pos.y, this.body.r);
        pop();
      }
}
