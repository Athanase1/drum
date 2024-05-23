var i = 0;
var length = document.querySelectorAll("button").length;
for(i = 0; i < length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", handleClick)
}
function handleClick(){
   alert("i got click")
}