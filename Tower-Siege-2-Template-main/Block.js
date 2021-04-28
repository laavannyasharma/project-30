class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.3,
          friction :0.3,
          density:0.4,
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("block.png")
      this.visibility = 225
    }
    display(){
      
      var pos= this.body.position;
      if (this.body.speed<3){
        imageMode(CENTER)
      image(this.image,pos.x,pos.y,this.width,this.height)
      }
      else{
        World.remove(world,this.body)
        
        push()
this.visibility = this.visibility-5
        tint(255,this.visibility)
      image(this.image,pos.x,pos.y,this.width,this.height)
      pop()
      }
      
     
      
    }
}
