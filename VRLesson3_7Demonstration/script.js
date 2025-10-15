let rnd = (l,u) => Math.random() * (u-l) + l
let scene, ship;
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  ship = new Ship(0,5,-1);
  mainCamera = document.getElementById("mainCamera");
  cylinderCamera = document.getElementById("cylinderCamera");
  
  for(let i = 0; i < 1000; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    s = new Shape(x,0.5,z);
  }

  window.addEventListener("keydown",function(e){
    if(e.key == "c"){
      cylinderCamera.setAttribute("active",true);
      mainCamera.setAttribute("active",false);
      ship.camera.setAttribute("active",false);
    }else if(e.key == "m"){
        cylinderCamera.setAttribute("active",false);
        mainCamera.setAttribute("active",true);
        ship.camera.setAttribute("active",false);
    }
  })

  loop();
})

function loop(){
  ship.move();

  window.requestAnimationFrame(loop);
}