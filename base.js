class base{
    constructor(x, y,width,height,angle) {
        var options = {
        isStatic:true
        }
        this.body = Bodies.rectangle(x, y,this.width,this.height, options);
        this.width =width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
     rectMode(CENTER);
       rect( 0, 0, this.width,this.height);
        pop();
      }
}