class Cone{
  constructor(x,y,z){
    this.x = x;
    this.dx = rnd(-5,5) / 100 
    this.y = y;
    this.z = z;
    this.dz = rnd(-5,5) / 100 
    this.launch = false;

    this.obj = document.createElement("a-cone")
    this.obj.setAttribute("interact","");
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z})

    scene.append(this.obj)
  }
  update(){
    if( this.launch ){
      this.y += 0.1
      this.obj.object3D.position.y = this.y;
    }else{
      this.x += this.dx;
      if(this.x < -20 || this.x > 20){
        this.dx = -this.dx;
      }
      this.z += this.dz;
      if(this.z < -20 || this.z > 20){
        this.dz = -this.dz;
      }
    }

    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})
    
  }
}