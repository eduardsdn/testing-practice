const {capitalize, reverseString, calculator} = require('./functions.js')

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


// it('', () => {
    
// })


