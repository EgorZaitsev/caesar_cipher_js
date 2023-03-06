let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let shiftedAlphabet = "";

const key = document.getElementById('key');
const textarea = document.getElementById("message");
const button = document.getElementById("apply");
const decrypted = document.getElementById("encrypted");

let shifter = (n) => {
    for (let i = 0; i < alphabet.length; i++) {
        let output = (i + n) % alphabet.length;
        shiftedAlphabet += alphabet[output];
    }
}


let encode = (message) => {
    message = message.toLowerCase();
    let result = '';
    for (let i = 0; i<message.length;i++) {
        if (message[i]!== " "){ 
            let letter = alphabet.indexOf(message[i]);
            result += shiftedAlphabet[letter];
        }
        else result += " ";
        
    }
    decrypted.textContent = result;
}



button.onclick = function(){
    
    shifter(Number(key.value));
    console.log(shiftedAlphabet);
    encode(textarea.value);
    shiftedAlphabet= "";
}

const textDecrypt = document.getElementById("decrypt");
const keyDecrypt = document.getElementById("keydecrypt");
const btnDecrypt = document.getElementById("btnDecrypt");
const resultDecrypt = document.getElementById("decrypted");

let decrypt = (messageDecrypt) => {
    messageDecrypt= messageDecrypt.toLowerCase();
    let result = '';

    for (let i = 0; i < messageDecrypt.length; i++) {
        if(messageDecrypt[i]!==" ") {
            let letter = shiftedAlphabet.indexOf(messageDecrypt[i]);
            result += alphabet[letter];
        }
        else result += " ";
    }

    resultDecrypt.textContent = result;
}


btnDecrypt.onclick = function() {
    shifter(Number(keyDecrypt.value));
    console.log(shiftedAlphabet);
    decrypt(textDecrypt.value);
    shiftedAlphabet= "";
}