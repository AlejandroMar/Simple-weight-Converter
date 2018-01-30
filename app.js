let mainInput = document.getElementById("lbsInput");
let cardsContainer = document.getElementById("output")
cardsContainer.style.visibility = "hidden"
mainInput.addEventListener("input", function(e){
    let lbs = e.target.value;
    cardsContainer.style.visibility = "visible"
    document.getElementById("gramsOutput").innerHTML = ( lbs / 0.0022046).toFixed(3) + " g";
    document.getElementById("kgOutput").innerHTML = ( lbs / 2.2046).toFixed(3) + " kg";
    document.getElementById("ozOutput").innerHTML = ( lbs*16).toFixed(3) + " oz";

    
})