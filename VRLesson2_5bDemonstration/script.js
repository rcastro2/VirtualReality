let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, snowmen = [ ], snowflake;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 20; i++){
    let tree = new Tree(rnd(-20,20), 0 , rnd(-20,20));
    tree.scale(rnd(1,4));
  }
  
  for(let i = 0; i < 20; i++){
    let snowman = new Snowman(rnd(-20,20),rnd(-20,20));
    snowmen.push(snowman);
  }

  cloud = new Cloud(-5,10,-1);

  loop();
})

function loop(){
  for(let snowman of snowmen){
    snowman.spin();
  }
  cloud.fly();
  window.requestAnimationFrame( loop );
}
