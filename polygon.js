class polygon {
    constructor(x,y,height,width){
      var options={
        
        density:0.5,
        friction:0.1
      }
      
     
     // Matter.Body.setAngle(this.body, angle);
    
    this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
      display(){
       var pos =this.body.position
        rectMode(CENTER)
        
        fill("green")
        rect(pos.x,pos.y,this.width,this.height)
      }
  }