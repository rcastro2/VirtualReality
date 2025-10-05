class Cone{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.height = 1;
    this.dheight = 0.01;

    this.obj = document.createElement("a-cone");

    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    scene.append(this.obj);
  }
  update(){
    this.height += this.dheight;
    if(this.height < 1 || this.height > 3){
      this.dheight = -this.dheight;
    }
    this.obj.setAttribute("height",this.height);
  }
}