"use strict";

require("./users.js");

//Получить общую сумму баланса (поле balance) всех пользователей.

const getTotalBalance = users => users.reduce((acc, curr) => acc + curr.balance, 0);

console.log(getTotalBalance(users)); // 20916
