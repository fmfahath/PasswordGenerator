const passwordEl = document.getElementById('password');
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~!@#$%^&*()-_=[]/";

const allChar = upperCase + lowerCaase + numbers + symbols;


function generatePassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCaase[Math.floor(Math.random() * lowerCaase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)];        
    }

    passwordEl.value = password;

}


