'use strict'

let destinationCountry;
let price;

destinationCountry = prompt("Please enter the country o shipment");
destinationCountry = destinationCountry.toLowerCase();

switch(destinationCountry) {
    case "china":
        price = 100;
        alert(`Shipment to ${destinationCountry.toUpperCase()} will cost ${price} credits`);
    break;
    case "south america":
        price = 250;
        alert(`Shipment to ${destinationCountry.toUpperCase()} will cost ${price} credits`);
    break;
    case "australia":
        price = 170;
        alert(`Shipment to ${destinationCountry.toUpperCase()} will cost ${price} credits`);
    break;
    case "india":
        price = 80;
        alert(`Shipment to ${destinationCountry.toUpperCase()} will cost ${price} credits`);
    break;
    case "jamaica":
        price = 120;
        alert(`Shipment to ${destinationCountry.toUpperCase()} will cost ${price} credits`);
    break;
    default:
        alert(`Shipment is not available for your country`);
    break;
}