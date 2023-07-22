
const timer = document.getElementById("mytime");


setInterval(update,1000)

function update(){
    const date = new Date();
    timer.innerHTML = formatdate();
    // console.log(formatdate())
    function formatdate(){
        let hours = date.getHours();
        let mins = date.getMinutes();
        let secs = date.getSeconds();
        let amorpm  = hours>=12 ? "pm" : "am";

        hours = (hours%12) || 12;
        hours = formatZero(hours);
        mins = formatZero(mins);
        secs = formatZero(secs);
 
        return `${hours}:${mins}:${secs} ${amorpm}`
    }
    function formatZero(s1){
        s1 = s1.toString();
        return s1.length<2 ? "0"+s1 : s1 ;
    }
    
    
}