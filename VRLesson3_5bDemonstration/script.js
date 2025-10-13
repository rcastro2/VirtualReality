let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera, cones = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  for(let i = 0; i < 10; i++){
    let x = rnd(-5,5);
    let z = rnd(-5,5);
    cones.push(new Cone(x,1,z));
  }

  setTimeout(loop,100);
})

function loop(){
  for(let cone of cones){
    cone.launch();
    if(distance(cone.obj,camera) < 1){
      cone.fire = true;
    }
  }
  
  window.requestAnimationFrame(loop);
}

function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}