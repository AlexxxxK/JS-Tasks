'use strict'

let credits = 23580;
let pricePerDroid = 3000;
let droidAmount;
let totalPrice;

droidAmount = prompt("Please, type in the amount of droids you would like to buy.");
if (droidAmount === null) {
    console.log("Cancelled by the user!");
} else {
    totalPrice = droidAmount * pricePerDroid;
    if (totalPrice > credits) {
        alert("There is not enough money on your bank account!");
    } else {
        console.log(`You have bought ${droidAmount} droids, there are ${credits - totalPrice} credits left on your account.`);
    }
}
