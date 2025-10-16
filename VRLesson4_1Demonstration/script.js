let rnd = (l,u) => Math.random() * (u-l) + l
let scene;
let people = [];
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");

  for(let i = 0; i < 40; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let person = document.createElement("a-gltf-model");
    person.setAttribute("src","#man");
    person.setAttribute("animation-mixer","");
    person.setAttribute("position",{x:x,y:0,z:z});
    person.addEventListener("click",function(){
      this.setAttribute("scale","0 0 0");
    })
    people.push(person);
    scene.append(person);
  }
  
  loop();
})

function loop(){
  for(let person of people){
    person.object3D.position.z += 0.005;
  }
  
  window.requestAnimationFrame(loop);
}

