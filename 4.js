
let sub = document.getElementById("subscribe");
let master = document.getElementById("masterCard");
let credit = document.getElementById("creditCard");
let debit = document.getElementById("debitCard");

document.getElementById("myButton").onclick = function(){
    if(sub.checked){
        console.log("you are Subscribed..!!!")
    }
    else{
        console.log("you are Not Subscribed..!!!")
    }


    if(master.checked){
        console.log("YOu done payment by MasterCard")
    }
    else if(credit.checked){
        console.log("YOu done payment by CreditCard")
    }
    else if(debit.checked){
        console.log("YOu done payment by DebitCard")
    }
    else{
        console.log("YOu don`t make payment..!!")
    }
}
