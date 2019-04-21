'use strict'

let input;
const numbers = [];
let total = 0;

do {
    input = prompt("Введите число");
    if (input === null) {
        break;
    } else if (Number.isNaN(Number(input))) {
        alert("Было введено не число, попробуйте еще раз");
    } else {
        numbers.push(Number(input));
    }
} while (input !== null);

if (numbers.length) {
    for (const value of numbers) {
        total += value;
    }
    console.log(`Общая сумма чисел равна ${total}`);
}