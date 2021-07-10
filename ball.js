class Ball{
    constructor(x,y,radius){
        var options={
            restitution:0.8,
            
        }
        this.body=Matter.Bodies.circle(x,y,radius,options);
        this.r=radius;
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push ()
        fill("indianRed");
        translate (pos.x,pos.y);
        rotate (angle);
        ellipseMode (RADIUS);
        ellipse(0,0,this.r,this.r);
        pop ();

    }

}