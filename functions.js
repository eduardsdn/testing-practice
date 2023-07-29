function capitalize(string) {
    return string.replace(string[0], string[0].toUpperCase())
}

function reverseString(str) {
    let newString = ""
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i]
    }
    return newString
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

function caesarCipher(str, key) {
    let encryptedStr = ""

    for(let i = 0; i < str.length; i++) {
        if(str[i] === "," || str[i] === "." || str[i] === "!" || str[i] === "?" || str[i] === "-" || str[i] === " "){
            encryptedStr += str[i]
        }
        else if(str[i].toUpperCase() === str[i]){
            encryptedStr += caesarCipherEncryptCharacter(str[i], key, true)
        }
        else(encryptedStr += caesarCipherEncryptCharacter(str[i], key, false))
    }

    return encryptedStr
}

function caesarCipherEncryptCharacter(character, key, isUpperCase){
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const alphabetUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    if(isUpperCase && (alphabetUpperCase.indexOf(character) + key + 1) > alphabetUpperCase.length) {
        let wrappedIndex = (alphabetUpperCase.length - (alphabetUpperCase.indexOf(character) + key))*-1
        let encryptedCharacter = alphabetUpperCase[wrappedIndex]
        return encryptedCharacter
    }
    if(isUpperCase) {
        let encryptedCharacter = alphabetUpperCase[alphabetUpperCase.indexOf(character) + key]
        return encryptedCharacter
    }
    if((alphabet.indexOf(character) + key + 1) > alphabet.length) {
        let wrappedIndex = (alphabet.length - (alphabet.indexOf(character) + key))*-1
        let encryptedCharacter = alphabet[wrappedIndex]
        return encryptedCharacter
    } 
    else{
        let encryptedCharacter = alphabet[alphabet.indexOf(character) + key]
        return encryptedCharacter
    } 
}

function analyzeArray(arr) {
    let analysis = {
        average: undefined,
        min: undefined,
        max: undefined,
        length: undefined
    }

    function calculateAverage(arr){
        const arrLength = arr.length
        let sum = 0 
        arr.forEach((element) => {
            sum += element
        })
        let average = sum/arr.length
        return average
    }

    analysis.average = calculateAverage(arr)
    analysis.min = Math.min(...arr)
    analysis.max = Math.max(...arr)
    analysis.length = arr.length

    
    return analysis
}

module.exports = {capitalize, reverseString, calculator, caesarCipher, analyzeArray}



