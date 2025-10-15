class Component{
  constructor(x,y,z, type){
    this.x = x;
    this.y = y;
    this.z = z;
    this.type = type;

    this.obj = document.createElement(type);
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z})

    scene.append(this.obj)
  }
}