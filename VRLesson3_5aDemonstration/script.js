let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera, target, ball;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  target = document.querySelector("#target");
  ball = document.querySelector("#ball");
  ball.x = -1;
  ball.dx = -0.002;
  
  setTimeout(loop,100);
})

function loop(){
  
  ball.x += ball.dx;
  ball.object3D.position.x = ball.x
  let d1 = distance(ball, target);
  output.setAttribute("value",`d1= ${d1}\nd2=${d2}`);

  if(d1 < 1){
    ball.dx = -ball.dx;
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
