class Bird
{
    constructor(x,y,w,h){
        var options={ density:1.5,
                      friction:1.0,
                    restitution:0.8
                    }      
        this.x=x;
        this.y=y;
        this.width=w;
        this,height=h;
        this.body= Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
     }
     display(){
         var pos= this.body.position;
         var angle= this.body.angle;
         pos.x=mouseX;
         pos.y=mouseY;
         rectMode(CENTER);
         push()
         translate(pos.x,pos.y)
         rotate(angle)
         fill("red");
         rect(0,0,this.width,this.height);
         pop()
     }

}