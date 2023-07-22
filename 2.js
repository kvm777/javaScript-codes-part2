const but = document.getElementById("myButton");
but.addEventListener("click", side)

function side(){
    let a = document.getElementById("Atext").value
    a=Number(a)

    let b = document.getElementById("Btext").value
    b=Number(b)

    let c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2))

    console.log(c)
    document.getElementById("clabel").innerHTML = "side c: "+c;
}