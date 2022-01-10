class slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 300
        }
        this.pointB=pointB
        this.slingshot1 = Constraint.create(options);
        World.add(world, this.slingshot1);
    }
    attach(body){
        this.slingshot1.bodyA = body;

    }
    
    fly(){
        this.slingshot1.bodyA = null;
    }

    display(){
       
        if(this.slingshot1.bodyA){
            var pointA = this.slingshot1.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            strokeWeight(3)
            line(pointB.x,pointB.y,pointA.x,pointA.y)
           
            
            pop();
        }
    }
    
}