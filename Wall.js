class Wall extends BaseClass {
    constructor(x, y,width,height){
  
      super(x,y,width,height);
      Matter.Body.setStatic(this.body, true)
      console.log(this.body);
    }
 
  };
  