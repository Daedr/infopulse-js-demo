var userQuantity;
var userCurrency = prompt("Input your currency to change(UAH or USD)");

while (userCurrency.toLowerCase() != "uah" && userCurrency.toLowerCase() != "usd") {
    alert("Error value!");
    userCurrency = prompt("Input your currency to change(UAH or USD)");
}

var currency = userCurrency.toLowerCase();

switch (currency) {
    case "uah":
        userQuantity = prompt("Input quantity (0-99999)");
        while (userQuantity <= 0 && userQuantity != null) {
            userQuantity = prompt("Input quantity (0-99999)");
        }
        alert("Your value is " + userQuantity / 25 + " usd");
        break;
    case "usd":
        userQuantity = prompt("Input quantity (0-99999)");
        while (userQuantity <= 0 && userQuantity != null) {
            userQuantity = prompt("Input quantity (0-99999)");
        }
        alert("Your value is " + userQuantity * 24 + " uah");
        break;
    default:
        break;
}
