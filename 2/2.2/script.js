'use strict'

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
let userPasswordInput;

do {
    userPasswordInput = prompt('Введите пароль');

    if (userPasswordInput === null) {
        break;
    } else if (passwords.includes(userPasswordInput)) {
        alert('Добро пожаловать!');
        break;
    }

    attemptsLeft -= 1;

    if (attemptsLeft) {
        alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
    } else {            
        alert('У вас закончились попытки, аккаунт заблокирован!');
    }
} while (attemptsLeft);