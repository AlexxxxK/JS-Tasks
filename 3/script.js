'use strict'

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  if (login.length >= 4 && login.length <= 16) {
      return true;
  } else {
      return false;
  }
};

const isLoginUnique = function(allLogins, login) {
  if (allLogins.includes(login) === false) {
    return true;
  } else {
    return false;
  }
};

const addLogin = function(allLogins, login) {
  if (isLoginValid(login) === false) {
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    return;
  } 
  
  if (isLoginUnique(allLogins, login) === false) {
    console.log('Такой логин уже используется!');
  } else {
    allLogins.push(login);
    console.log('Логин успешно добавлен!');
  }
};

// Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'