'use strict'

let input;
const numbers = [];
let total = 0;

do {
    input = prompt("Введите число");
    if (isNaN(input) === true) {
        alert("Было введено не число, попробуйте еще раз");
    } else if (input !== null) {
        numbers.push(Number(input));
    }
} while (input !== null);

if (numbers.length > 0) {
    for (const value of numbers) {
        total += value;
    }
    console.log(`Общая сумма чисел равна ${total}`);
}