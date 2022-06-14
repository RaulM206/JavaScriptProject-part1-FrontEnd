window.onload = function(){
    const button = document.getElementById("buttonDisplay");
    const pizzaSize = document.getElementsByClassName("pizzaSize");
    const toppings = document.getElementsByClassName("toppings");
    var textArea = document.getElementById("display");
    const drinkType = document.getElementById("drink");
    const drinkSize = document.getElementById("drinkSize");
    const fullName = document.getElementById("fullName");
    const address = document.getElementById("Address");
    const cityAndState = document.getElementById("City-and-State");
    const zip = document.getElementById("Zip");
    const phone = document.getElementById("phoneNumber");

    buttonDisplay.addEventListener('click', function(){
        let dollarUS = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        });
        var total = 0;
        var displayValue = " Pizza: "
        if (pizzaSize[0].checked){
            total += parseFloat(pizzaSize[0].value);
            displayValue += "Small\n"
        }
        else if (pizzaSize[1].checked){
            total += parseFloat(pizzaSize[1].value);
            displayValue += "Medium\n"
        }
        else if (pizzaSize[2].checked){
            total += parseFloat(pizzaSize[2].value);
            displayValue += "Large\n"
        }
        else if (pizzaSize[3].checked){
            total += parseFloat(pizzaSize[3].value);
            displayValue += "Extra Large\n"
        }
        else{
            alert("Please select a pizza size");
        }

        displayValue += "\n Toppings: \n"
        if (toppings[0].checked){
            total += parseFloat(toppings[0].value);
            displayValue += " Pepperoni\n"
        }
        if (toppings[1].checked){
            total += parseFloat(toppings[1].value);
            displayValue += " Mushroom\n"
        }
        if (toppings[2].checked){
            total += parseFloat(toppings[2].value);
            displayValue += " Extra Cheese\n"
        }
        if (toppings[3].checked){
            total += parseFloat(toppings[3].value);
            displayValue += " Sausage\n"
        }
        if (toppings[4].checked){
            total += parseFloat(toppings[4].value);
            displayValue += " Onion\n"
        }
        if (toppings[5].checked){
            total += parseFloat(toppings[5].value);
            displayValue += " Black Olives\n"
        }
        if (toppings[6].checked){
            total += parseFloat(toppings[6].value);
            displayValue += " Green Peppers\n"
        }
        if (toppings[7].checked){
            total += parseFloat(toppings[7].value);
            displayValue += " Fresh Garlic\n"
        }
        if (toppings[8].checked){
            total += parseFloat(toppings[8].value);
            displayValue += " Tomato\n"
        }
        if (toppings[9].checked){
            total += parseFloat(toppings[9].value);
            displayValue += " Fresh Basil\n"
        }
        displayValue += "\n Drink(s)\n"

        for (var i = 0; i < drinkType.length; i++) {
            if (drinkType[i].selected === true){
                displayValue += " " + drinkType[i].value + "\n";
                break;
            }
        }

        for (var i = 0; i < drinkSize.length; i++) {
            if (drinkSize[i].selected === true){
                total += parseFloat(drinkSize[i].value);
                displayValue += " " + "Size Price: " + drinkSize[i].value + "\n";
                
            }
        }
        displayValue += "\n Customer Information\n";
        if (fullName != ""){
            displayValue += " " + fullName.value + "\n";
        }
        if (address != ""){
            displayValue += " " + address.value + "\n";
        }
        if (cityAndState != ""){
            displayValue += " " + cityAndState.value + "\n"
        }
        if (zip != ""){
            displayValue += " " + zip.value + "\n"
        }
        if (phone != ""){
            displayValue += " " + phone.value + "\n"
        }
        displayValue += "\n" + " " + "Total: " + dollarUS.format(total);
        textArea.value = displayValue
      

    })
    
    document.getElementById("myAudio").loop = true|false 
}