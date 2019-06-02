"use strict";

require("./users.js");

//Получить пользоваля (не массив) по email (поле email, он уникальный).

const getUserByEmail = (users, email) => users.find(user => user.email === email);

console.log(getUserByEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserByEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}
