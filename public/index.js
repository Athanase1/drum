var i = 0;
var length = document.querySelectorAll("button").length;
for(i = 0; i < length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", handleClick)
}
function handleClick(){
   var audio = new Audio("../assets/sounds/tom-1.mp3")
   return audio.play();
}