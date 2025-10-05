class Box{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dx = 0.02;

    this.obj = document.createElement("a-box");

    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    scene.append(this.obj);
  }
  update(){
    this.x += this.dx;
    if(this.x >= 2 || this.x < -2){
      this.dx = -this.dx;
      console.log(this.dx);
    }
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
  }
}