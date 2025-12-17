let val = 0.75, strength = 0;
window.addEventListener("DOMContentLoaded",function() {

  lamp.onclick = function(){
    strength += val;
    val = -val;
    lamp.setAttribute("light",{intensity:strength});
  }  

  loop();
})

function loop(){
  light_source.object3D.rotation.z += 0.002;
  window.requestAnimationFrame( loop );
}