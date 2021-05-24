class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility = 255;
      World.add(world, this.body);
      this.image = loadImage("block.png");//block.png is not in sprites folder
    this.Visiblity = 255;
    }
    display(){
      imageMode(CENTER);//added imagemode to center
      if(this.body.speed<3){
        image(this.image, this.body.position.x, this.body.position.y); 
      }
      else{
        World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y);
     pop();
      }
    }
}