"use strict";

require("./users.js");

//Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersByFriend = (users, name) =>
  users.filter(user => user.friends.includes(name)).map(user => user.name);

console.log(getUsersByFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersByFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
