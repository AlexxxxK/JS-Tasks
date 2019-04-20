'use strict'

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
let userPasswordInput;
let isPasswordCorrect = false;

do {
    userPasswordInput = prompt('Введите пароль');
    if (userPasswordInput === null) {
        break;
    } else {
        for (const value of passwords) {
            if (userPasswordInput === value) {
                alert('Добро пожаловать!');
                isPasswordCorrect = true;
                break;
            }
        }
        if (isPasswordCorrect === false) {
            attemptsLeft -= 1;
        } 
        if (attemptsLeft > 0 && isPasswordCorrect === false) {
            alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
        } else if (attemptsLeft === 0 && isPasswordCorrect === false) {            
            alert('У вас закончились попытки, аккаунт заблокирован!');
        }
    }
} while (attemptsLeft > 0 && isPasswordCorrect === false);