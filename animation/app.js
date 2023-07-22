const animation = document.getElementById("myDiv")
const mybutton = document.getElementById("myButton")

mybutton.addEventListener("click", begin);

function begin(){
    let  timerId = null;
    let x = 0;
    let y = 0;
    let degrees = 0;

    timerId = setInterval(formation, 5)

    function formation(){
        
        if (y>=200 || x>=200){
            clearInterval(timerId);
        }
        else{
            y+=1;
            x+=1;
            degrees+=2;
            animation.style.left = y+"px";
            animation.style.top = x+"px";
            animation.style.transform = "rotateZ("+degrees+"deg)";
        }
        
        /*
        if (degrees >=360){
            clearInterval(timerId);
        }
        else{
            degrees+=1;
            //animation.style.transform = "rotateX("+degrees+"deg)";
            //animation.style.transform = "rotateY("+degrees+"deg)";
            animation.style.transform = "rotateZ("+degrees+"deg)";
        }
        */
    }
}