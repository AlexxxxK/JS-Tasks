'use strict'

const ADMIN_PASSWORD = 'm4ng0h4ckz';
let userInput;
let message;

userInput = prompt('Please type in the password');
if (userInput === null) {
    message = 'Cancelled by the user!';
} else if (userInput === ADMIN_PASSWORD) {
    message = 'Welcome!';
} else {
    message = 'Access denied, wrong password!';
}
alert(message);