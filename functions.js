function capitalize(string) {
    return string.replace(string[0], string[0].toUpperCase())
}

function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

const calculator = {
    add: function(a, b) {
        return a + b
    },
    subtract: function(a, b) {
        return a - b 
    },
    divide: function(a, b) {
        return a / b
    },
    multiply: function(a, b) {
        return a*b
    },
}
// str, key
function ceasarCipher() {
    let encryptedStr = ""
    str = "Humanoids are taking over the Earth! But, AhaHAhH"
    key = 25
    for(let i = 0; i < str.length; i++) {
        if(str[i] === "," || str[i] === "." || str[i] === "!" || str[i] === "?" || str[i] === "-" || str[i] === " "){
            encryptedStr += str[i]
        }
        else if(str[i].toUpperCase() === str[i]){
            encryptedStr += ceasarCipherEncryptCharacter(str[i], key, true)
        }
        else(encryptedStr += ceasarCipherEncryptCharacter(str[i], key, false))
    }
    console.log(encryptedStr)
}

function ceasarCipherEncryptCharacter(character, key, isUpperCase){
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const alphabetUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    if(isUpperCase) {
        let encryptedCharacter = alphabetUpperCase[alphabetUpperCase.indexOf(character) + key]
        return encryptedCharacter
    }
    else{
        let encryptedCharacter = alphabet[alphabet.indexOf(character) + key]
        return encryptedCharacter
    } 
    
}

ceasarCipher()

module.exports = {capitalize,  reverseString, calculator}



