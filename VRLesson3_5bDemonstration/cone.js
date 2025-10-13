class Cone{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0.01;

    this.obj = document.createElement("a-cone");
    this.obj.setAttribute("height",2);
    this.obj.setAttribute("radius-bottom",0.25);
    this.obj.setAttribute("position",{x:this.x, y:this.y, z: this.z})
    scene.append(this.obj);
  }
  launch(){
    // if(distance(this.obj,camera) < 1){
    //   this.fire = true;
    // }
    if(this.fire){
      this.y += this.dy;
      this.obj.object3D.position.y = this.y;
    }
  }
}