let scene;
let box, sphere, cone, torus;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  box = new Box(0,1,-5);
  cone = new Cone(0,0,-3);
  sphere = new Sphere(0,3,-6);
  torus = new Torus(-1,4,-6);
  loop();
})

function loop(){
  box.update();
  cone.update();
  sphere.update();
  torus.update();
  window.requestAnimationFrame( loop );
}

