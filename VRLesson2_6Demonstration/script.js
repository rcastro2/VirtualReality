let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rockets = [ ], rocketTemplate;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
  rocketTemplate = document.querySelector("#rocketTemplate");

  for(let x = -10; x < 10; x += 2){
    for(let z = -10; z < 10; z += 2){
      let r = new Rocket(x, 1, z);
      rockets.push(r);
    }
  }

  loop();
})

function loop(){
  for(let r of rockets){
    r.launch();
  }
  window.requestAnimationFrame( loop );
}
