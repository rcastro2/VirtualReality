window.addEventListener("DOMContentLoaded",function() {
  let myBox = document.getElementById("myBox")
  myBox.setAttribute("color","cyan");
  myBox.addEventListener("mouseenter",function(){
    this.setAttribute("color","blue")
  })

  //Below are different techniques for incorporating the event handler.  Not intended to be demonstrated to students.
  myBox.addEventListener("mouseleave",function(obj){
    console.log(this);
    obj.target.setAttribute("color","white")
  })
  myBox.addEventListener("mousedown",(obj)=>{
    console.log(this);
    obj.target.setAttribute("color","green")
  })
  myBox.onclick = function(){
    console.log("onclick")
  }
  myBox.addEventListener("mouseup",changeColor,options={color:"cyan"})
})

function changeColor(){
  console.log(options);
  this.setAttribute("color",options.color);
}