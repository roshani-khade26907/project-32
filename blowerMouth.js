class BlowerMouth{
    constructor(x,y,width,height){
        var options={
            isStatic:true,

        }
        this.body=Matter.Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);


    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle;
        push ()
        fill ("#8d6e63");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height)
        pop ()


    }

}