class paper{
    constructor(){
    var options = {
       
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
    this.body = Bodies.circle(100,660,55,options);
    World.add(world,this.body);

    }

    display(){
    var pos = this.body.position;
    ellipseMode(RADIUS);
    fill("pink");
    ellipse(pos.x, pos.y, 20);
    }






}