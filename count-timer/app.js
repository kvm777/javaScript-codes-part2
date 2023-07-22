let count=0;

const timer = setInterval(timeup,1000);
max = window.prompt("enter the count number..")

function timeup(){
    count+=1;
    document.getElementById("h1").innerHTML = count;
    if (count>=max){
        clearInterval(timer);
    }6
    6
}