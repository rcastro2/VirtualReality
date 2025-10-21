class Block{
  constructor(x,y,z){
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("static-body","");
    this.obj.setAttribute("width",2);
    this.obj.setAttribute("height",2);
    this.obj.setAttribute("depth",2);

    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);
    this.obj.addEventListener("click",()=>{
      this.obj.remove();
    })
  }
}