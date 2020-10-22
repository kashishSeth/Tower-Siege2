class SlingShot{
    constructor(bodyC,pointD){
      var Properties ={
          bodyA:bodyC,
          pointB:pointD,
          stiffness:.08,
          length:1
      }
      this.p=pointD
      this.Sling=Constraint.create(Properties);
      World.add(world,this.Sling);
    }

    fly(){
    //null means nothing    
    this.Sling.bodyA=null
}
    attach(body){
  this.sling.bodyA = body;
}

    Show(){
//every condition written in if, the binary value of true is 1 and false is 0

  if(this.Sling.bodyA){      
     var pointA = this.Sling.bodyA.position
     var pointB = this.p
     push()

     strokeWeight(1);
     stroke(48,22,8);
    
    /* 
     line(pointA.x-20, pointA.y, pointB.x-10, pointB.y)
     line(pointA.x-20,pointA.y, pointB.x+30, pointB.y-3);
     */line(pointA.x,pointA.y,pointB.x,pointB.y);
    //line(pos1.x,pos1.y,pos2.x,pos2.y);
  }
    pop()  
    }
}