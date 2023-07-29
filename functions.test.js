const {capitalize, reverseString, calculator, caesarCipher, analyzeArray} = require('./functions.js')

it('capitalize works', () => {
    string = "apple"
    expect(capitalize(string)).toMatch("Apple")
})

it('reverseString works', () => {
    string = "hello"
    expect(reverseString(string)).toMatch("olleh")
})

it('calculator addition works', () => {
    a = 10
    b = 12
    expect(calculator.add(a, b)).toEqual(22)
})

it('calculator subtract works', () => {
    a = 10
    b = 6
    expect(calculator.subtract(a, b)).toEqual(4)
})

it('calculator mult works', () => {
    a = 10
    b = 2
    expect(calculator.multiply(a, b)).toEqual(20)
})

it('calculator division works', () => {
    a = 112
    b = 4
    expect(calculator.divide(a, b)).toEqual(28)
})


// caesarCipher
it('Caesar cipher encrypts basic strings', () => {
    str="hello"
    key=1
    expect(caesarCipher(str, key)).toMatch("ifmmp")
})

it('Caesar cipher encrypts basic strings with capital letters and punctuation', () => {
    str="Unfortunately, No"
    key=1
    expect(caesarCipher(str, key)).toMatch("Vogpsuvobufmz, Op")
})

it('Caesar cipher encrypts basic strings with capital letters and punctuation, with larger keys', () => {
    str="Unfortunately, No! I do not have the right. Do you?"
    key=6
    expect(caesarCipher(str, key)).toMatch("Atluxzatgzkre, Tu! O ju tuz ngbk znk xomnz. Ju eua?")
})

it('Caesar cipher encrypts strings with punctuation chars with the largest key', () => {
    str="My name is Elena! Unfortunately, I do not live in Yerevan!"
    key=25
    expect(caesarCipher(str, key)).toMatch("Lx mzld hr Dkdmz! Tmenqstmzsdkx, H cn mns khud hm Xdqduzm!")
})

// analyzeArray 
it('Analyze array returns correct average', () => {
    arr = [1,8,3,4,2,6]
    expect(analyzeArray(arr).average).toEqual(4)
})
it('Analyze array returns correct min', () => {
    arr = [1,8,3,4,2,6]
    expect(analyzeArray(arr).min).toEqual(1)
})
it('Analyze array returns correct max', () => {
    arr = [1,8,3,4,2,6]
    expect(analyzeArray(arr).max).toEqual(8)
})
it('Analyze array returns correct length', () => {
    arr = [1,8,3,4,2,6]
    expect(analyzeArray(arr).length).toEqual(6)
})



