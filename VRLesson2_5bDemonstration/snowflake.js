class Snowflake{
  constructor(x,y,z){
    // Challenge 1: Create animation variables y and dy for the Snowflake to fall.  Set them to appropriate values.
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.1;
    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("radius",0.1);
    this.obj.setAttribute("opacity",0.65);
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append( this.obj );
  }

  //Challenge 2: Create a function fall() which decreases y by dy and updates the Snowflake object to that y position
  fall(){
    this.y -= this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})
  }
}