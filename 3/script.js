'use strict'

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  return (login.length >= 4 && login.length <= 16);
};

const isLoginUnique = function(allLogins, login) {
  return (!allLogins.includes(login));
};

const addLogin = function(allLogins, login) {
  let message;
  if (!isLoginValid(login)) {
    message = 'Ошибка! Логин должен быть от 4 до 16 символов';
  } 
  
  if (!isLoginUnique(allLogins, login)) {
    message = 'Такой логин уже используется!';
  } else {
    allLogins.push(login);
    message = 'Логин успешно добавлен!';
  }
  
  return message;
};

// Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
console.log(addLogin);
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
console.log(addLogin);
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin);
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin);
