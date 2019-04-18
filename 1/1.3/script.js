'use strict'

let destinationCountry;
const SHIPPING_PRICE_CHINA = 100;
const SHIPPING_PRICE_SOUTH_AMERICA = 250;
const SHIPPING_PRICE_AUSTRALIA = 170;
const SHIPPING_PRICE_INDIA = 80;
const SHIPPING_PRICE_JAMAICA = 120;

destinationCountry = prompt("Please enter the country of shipment").toLowerCase();
if (destinationCountry === null) {
    console.log("Cancelled by the user");
}
switch(destinationCountry) {
    case "china":
        console.log(`Shipment to ${destinationCountry} will cost ${SHIPPING_PRICE_CHINA} credits`);
        break;
    case "south america":
        console.log(`Shipment to ${destinationCountry} will cost ${SHIPPING_PRICE_SOUTH_AMERICA} credits`);
        break;
    case "australia":
        console.log(`Shipment to ${destinationCountry} will cost ${SHIPPING_PRICE_AUSTRALIA} credits`);
        break;
    case "india":
        console.log(`Shipment to ${destinationCountry} will cost ${SHIPPING_PRICE_INDIA} credits`);
        break;
    case "jamaica":
        console.log(`Shipment to ${destinationCountry} will cost ${SHIPPING_PRICE_JAMAICA} credits`);
        break;
    default:
        console.log(`Shipment is not available for your country`);
        break;
}
