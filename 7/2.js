"use strict";

require("./users.js");

//Получить массив объектов пользователей по цвету глаз (поле eyeColor).
const getUsersByEyeColor = (users, color) => users.filter(user => user.eyeColor === color);

console.log(getUsersByEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
