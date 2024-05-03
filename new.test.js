const {DollarToYen, EuroToDollar, YenToPound, oneEuroIs} = require('./app.js');




test('test dollarToYen function', () => {
    let output = DollarToYen(1)
    expect(output).toBe(146)
})


test('test euroToDollar function', () => {
    let output = EuroToDollar(3.5 * 1.07)
    expect(output).toBe(3.745)
})


test('test yenToPound function', () => {
    let output = YenToPound(1)
    expect(output).toBe(180)
})




// test('testing sum function', () => {
//     let output = sum(8, 27)
//     expect(output).toBe(35) 
// })


// test("type of the output",  () =>{
//     let output = sum(8, 27)
//    expect(typeof output).toBe('number') 
// })
