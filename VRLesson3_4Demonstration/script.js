let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let score, time, balls = [], t = 60;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  time = document.getElementById("time");
  for(let i = 0;i < 10; i++){
    let x = rnd(-10,10);
    let y = rnd(-10,10);
    let z = rnd(-10,10);

    balls.push(new Ball(x,y,z));
  }
  countdown();
  loop();
})

function countdown(){
  time.setAttribute("value",`Time: ${t}`);
  t--;
  setTimeout(countdown,1000);
}
function loop(){
  for(let ball of balls){
    ball.move();
  }
  window.requestAnimationFrame(loop);
}