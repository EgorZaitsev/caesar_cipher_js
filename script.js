let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let shiftedAlphabet = "";

const key = document.getElementById('key');
const textarea = document.getElementById("message");
const button = document.getElementById("apply");
const decrypted = document.getElementById("decrypted");

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
    console.log(textarea.value);
    shifter(Number(key.value));
    encode(textarea.value);
    shiftedAlphabet= "";
}
