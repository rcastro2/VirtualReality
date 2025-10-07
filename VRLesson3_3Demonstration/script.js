let scene;
let boxes = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene")
  for(let r = -10; r < 10; r += 2)
    for(let c = -10; c < 10; c += 2)
      boxes.push(new Box(r,c))
      
  loop();
})

function loop(){
  for(let box of boxes){
    box.update();
  }
    
  window.requestAnimationFrame(loop);
}