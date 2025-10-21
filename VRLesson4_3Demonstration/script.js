let maze = [
  "xxxxxxxxxxxxxxxxxxxxxxxxx",
  "------x-----x-----------x",
  "x-x---x-----x-----------x",
  "x-x---------------------x",
  "x-x-----xxx-------------x",
  "x-x---------------------x",
  "x-x------xxxxxxxxxxxxx--x",
  "x-x-------xxx--------x--x",
  "x-xxxxxx---xxxxxxx---x--x",
  "x-x-------------xx---x--x",
  "x-x-xxxx-------xx----x--x",
  "x-x-x---------xxxxxxxx--x",
  "x-x-x-------------------x",
  "x---x-------------------x",
  "xxxxxxxxxxxxxxxxxxxxxxxxx",
];
let scene;
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let z = 0; z < maze.length;z++){
    let cells = maze[z].split("");
    for(let x = 0; x < cells.length; x++){
      if(cells[x] == "x"){
        new Block(x*2,-9.5,z*2);
      }
    }
  }
})