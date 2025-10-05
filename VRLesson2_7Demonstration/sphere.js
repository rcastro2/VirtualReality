class Sphere{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.opacity = 1;
    this.dopacity = -0.01;

    this.obj = document.createElement("a-sphere");

    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    scene.append(this.obj);
  }
  update(){
    this.opacity += this.dopacity;
    if(this.opacity < 0 || this.opacity > 1){
      this.dopacity = -this.dopacity;
    }
    this.obj.setAttribute("opacity",this.opacity);
  }
}