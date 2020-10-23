class Log extends BaseClass {
    constructor(x, y, height, angle) {
      //accessing the constructor of Parent class
      super(x, y,20,height,angle);
      
      this.image = loadImage("sprites/wood2.png");
      //setting the angle of log by immediate effect
      Matter.Body.setAngle(this.body, angle);
    }
  };
  