let bund = document.getElementById("bund");
let topping = document.getElementById("top");
let antal = document.getElementById("antal");


function continueButton(){
    alert(bund.value + " " + topping.value + " " + antal.value);
    document.getElementById("bought-bund").innerHTML = bund.value;
}   

