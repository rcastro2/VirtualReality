class Torus{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.arc = 0;
    this.darc = 1;

    this.obj = document.createElement("a-torus");

    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    scene.append(this.obj);
  }
  update(){
    this.arc += this.darc;
    if(this.arc < 0 || this.arc > 270){
      this.darc = -this.darc;
    }
    this.obj.setAttribute("arc",this.arc);
  }
}