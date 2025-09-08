let components_names = [
  "a-box",
  "a-circle",
  "a-cone",
  "a-cylinder",
  "a-dodecahedron",
  "a-icosahedron",
  "a-octahedron",
  "a-plane",
  "a-ring",
  "a-sphere",
  "a-tetrahedron",
  "a-torus-knot",
  "a-torus",
  "a-triangle"]
let rnd = (l,u) => Math.floor(Math.random() * (u-l) + l);
let rndColor = () => "rgb(" + rnd(0,256) + "," + rnd(0,256) + "," + rnd(0,256) + ")";
let components = [];

window.addEventListener("DOMContentLoaded",function() {
  let scene = document.querySelector("a-scene")
  let text1 = document.querySelector("#text1");
  let text2 = document.querySelector("#text2");
  let delta = 2 * Math.PI / (components_names.length);
  let theta = 0;
  let size = 8;
  
  for(let component of components_names){
    theta += delta;
    let x = size * Math.cos(theta);
    let z = size * Math.sin(theta);
    let el = document.createElement(component);
    el.setAttribute("position",{x:x,y:2,z:z - 4});
    el.setAttribute("color",rndColor());
    el.setAttribute("side","double");
    el.addEventListener("mouseenter",function(obj){
        text1.setAttribute("value",component)
        text2.setAttribute("value",component)
    })
    components.push(el);
    scene.append(el);
  }
  loop();
})

function loop(){
  for(let component of components){
      component.object3D.rotation.y += 0.01
  }
  window.requestAnimationFrame(loop);
}