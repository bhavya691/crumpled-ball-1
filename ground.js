class ground{
    constructor()
    {
    var options = {
        isStatic:true
    }    

    this.body = Bodies.rectangle(100,670,700,20,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);

    }
    
    display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill("yellow");
    rect(400,630,800,5);

    }
   
}
