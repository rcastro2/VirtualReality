class Rocket{
  constructor(x,y,z){
    this.x = x;
    this.z = z;

    this.y = y;
    this.dy = rnd(1,10) / 50 
    
    this.obj = rocketTemplate.cloneNode(true);
    
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);  
    
  }
  launch(){
    this.y += this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
  }
}