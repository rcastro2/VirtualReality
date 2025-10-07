class Box{
  constructor(x,z){
    this.x = x;
    this.z = z;
    this.y = 1;
    this.r = 0;
    this.dr = 1;
    this.flag = false;

    this.obj = document.createElement("a-box")
    this.obj.setAttribute("interact","");
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z})
    //Arrow Function
    this.obj.addEventListener("mouseenter",()=>{
      //console.log(this);
      this.flag = true;
      this.obj.setAttribute("color","yellow");
    })
    this.obj.addEventListener("mouseleave",()=>{
      //console.log(this);
      this.flag = false;
      this.obj.setAttribute("color","white");
    })
    scene.append(this.obj)
  }
  update(){
    if( this.flag ){
      this.r += this.dr;
      this.obj.setAttribute("rotation",{x:0,y:this.r,z:0});
    }
    
  }
}