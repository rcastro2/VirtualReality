let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");

  window.addEventListener("click",function(){
    console.log("hi");
    let x = camera.object3D.position.x;
    let z = camera.object3D.position.z;
    new Box(x,1,z);
  })
  
  window.addEventListener("keydown",function(e){
    console.log(e.key)
    let x = camera.object3D.position.x;
    let z = camera.object3D.position.z;
    if(e.key == "1"){
      new Sphere(x,1,z);
    }else if(e.key == "2"){
      new Cone(x,1,z);
    }
  })
  
})
