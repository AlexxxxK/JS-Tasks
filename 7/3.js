"use strict";

const users = require("./users.js");

//Получить массив имен пользователей по полу (поле gender).
const getUsersByGender = (users, gender) =>
  users.filter(user => user.gender === gender).map(user => user.name);

console.log(getUsersByGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
