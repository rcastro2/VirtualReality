let rnd = (l,u) => Math.random() * (u-l) + l
let components_names = {
  "1":"a-box",
  "2":"a-cone",
  "3":"a-cylinder",
  "4":"a-dodecahedron",
  "5":"a-icosahedron",
  "6":"a-octahedron",
  "7":"a-sphere",
  "8":"a-tetrahedron",
  "9":"a-torus-knot",
  "0":"a-torus",
}
let scene, camera, text, component;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  text = document.querySelector("#output");

  window.addEventListener("click",function(){
    let x = camera.object3D.position.x;
    let z = camera.object3D.position.z;
    if(component){
      new Component(x,1,z,component);
    }
  })
  
  window.addEventListener("keydown",function(e){  
    if(e.key in components_names){
      component = components_names[e.key];
      text.setAttribute("value",component)
    }
  })
  
})
