// const sum = (a,b) => {
//     return a + b
// }

// const sub = (a,b) => {
//     return a - b
// }

// console.log(sub(20, 7))

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
  // Convert the given valueInEuro to dollars
  let valueInDollar = valueInEuro * 1.07;
  // return the dollar value
  return valueInDollar;
}


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

let DollarToYen = function (dollarValue) {
    return Math.round(oneEuroIs["JPY"] / oneEuroIs["USD"]) * dollarValue;
  };
  
  let EuroToDollar = function (euroValue) {
    return Math.round(oneEuroIs["USD"]) * euroValue;
  };
  
  let YenToPound = function (poundValue) {
    return Math.round(oneEuroIs["JPY"] / oneEuroIs["GBP"]) * poundValue;
  };
  
module.exports = {DollarToYen, EuroToDollar, YenToPound, oneEuroIs};