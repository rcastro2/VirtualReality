class Ship{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.a = 0;
    this.da = 0.002;

    this.obj = document.createElement("a-dodecahedron");
    this.camera = document.createElement("a-camera");
    this.camera.setAttribute("active",false);
    this.camera.setAttribute("wasd-controls-enabled",false);
    this.obj.append( this.camera )
    this.obj.addEventListener("click",()=>{
      cylinderCamera.setAttribute("active",false);
      mainCamera.setAttribute("active",false);
      this.camera.setAttribute("active",true);
    })

    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    scene.append(this.obj);
  }
  move(){
    this.a += this.da;
    this.x = 8 * Math.cos(ship.a);
    this.z = 8 * Math.sin(ship.a);
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z });
  }
}