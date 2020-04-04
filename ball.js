class ball{
    constructor(x, y,radius,angle,options) {
        var options = {
          'restitution':1.0,
          'density':1.0,
         isStatic:true
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
      ellipse( 0, 0, this.radius);
        pop();
      }
      followMouse(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
    }
    
    detachFromMouse(){
        this.body.position.x = posX;
        this.body.position.y = posY;
    }
  }