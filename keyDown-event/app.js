
// window.addEventListener("keydown", event => console.log(event.key))
const myDiv = document.getElementById("mydiv")
window.addEventListener("keydown" , move)
//here keydown is the event...
let x=0;
let y=0;
function  move(event){
    //console.log(event.key)
    switch(event.key){
        case "ArrowDown":
            y+=5;
            myDiv.style.top = y+"px";
            break;
        case "ArrowUp":
            y-=5;
            myDiv.style.top = y + "px";
            break;
        case "ArrowRight":
            x+=5;
            myDiv.style.left = x + "px";
            break;
        case "ArrowLeft":
            x-=5;
            myDiv.style.left = x + "px";
            break;
    }
}