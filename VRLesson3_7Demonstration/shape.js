class Shape{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.obj = document.createElement("a-sphere");
    let r = Math.floor(rnd(0,255));
    let g = Math.floor(rnd(0,255));
    let b = Math.floor(rnd(0,255));
    this.obj.setAttribute("color",`rgb(${r},${g},${b})`);
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    scene.append(this.obj);
  }
}