class Block{
  constructor(x,z){
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("position",{x:x,y:0.5,z:z});
    scene.append( this.obj );
  }
}