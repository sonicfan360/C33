class slingShot {
    constructor(bird, newPoint){
    // create the coptions - bodyA, bodyB, stiffness, length    

    var options = {bodyA : bird, 
        pointB : newPoint,
        stiffness: .04,
        length: 10,
}
    this.pointB = newPoint;
    this.sling1 = loadImage("sprites/sling1.png");
    this.sling2 = loadImage("sprites/sling2.png");
    this.sling3 = loadImage("sprites/sling3.png");
    //create the contraint by giving options
    this.sling = Matter.Constraint.create(options)
    World.add(world,this.sling)

}

fly()
{
     Matter.Body.applyForce(this.sling.bodyA, this.sling.bodyA.position, {x:100, y:50})
    this.sling.bodyA = null;
}
attach(bird){
   this.sling.bodyA = bird;  //attach the bird back to bodyA
}
display()
{
    image(this.sling1, 280, 80, 40, 140);
    image(this.sling2, 250, 70, 40, 100);

    //var pointA = this.sling.bodyA.position;  //birds position
    //var pointB = this.pointB;    //pointB for the sling
    
    //line is between two points
    //bird position - x1, y1
    //pointB position - x2,y2
    if(this.sling.bodyA)
    {
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        if(pointA.x<250)
        {
        stroke("#52270E")
        strokeWeight(3)
       //line(Secpos.x, Secpos.y, firstpos.x, firstpos.y)
       line(pointA.x-15,pointA.y, pointB.x-30,pointB.y+50);
       line(pointA.x+20,pointA.y, pointB.x+27, pointB.y+50)
        }
        else
        {
            strokeWeight(8)
            stroke("#52270E")
            //line(Secpos.x, Secpos.y, firstpos.x, firstpos.y)
            line(pointA.x-15,pointA.y, pointB.x-30,pointB.y+50);
            line(pointA.x+20,pointA.y, pointB.x+27, pointB.y+50)
        }
    }

}
   
}
