let myBox;

window.addEventListener("DOMContentLoaded",function() {
  myBox = document.getElementById("myBox")
  myBox.r = -45;
  myBox.dr = 1;
  myBox.addEventListener("mouseenter",function(){
    this.rotate = true
  })
  myBox.addEventListener("mouseleave",function(){
    this.rotate = false
  })
  loop();
})

function loop(){
  if(myBox.rotate){
    myBox.r += myBox.dr;
    myBox.setAttribute("rotation",{x:0,y:myBox.r,z:0})
  }
  window.requestAnimationFrame( loop );
}