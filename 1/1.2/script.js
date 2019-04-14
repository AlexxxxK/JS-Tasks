'use strict'

let credits = 23580;
let pricePerDroid = 3000;
let droidAmount;

droidAmount = Number(prompt("Please, type in the amount of droids you would like to buy."));
if (!droidAmount) {
    console.log("Cancelled by the user!");
} else {
    let totalPrice = droidAmount * pricePerDroid;
    if (totalPrice >credits) {
        alert("There is not enough money on your bank account! You can afford only " + Math.floor(credits/pricePerDroid) + " droids");
    } else {
        credits = credits - totalPrice;
        alert(`You have bought ${droidAmount} droids, there are ${credits} credits left on your account.`);
    }
}