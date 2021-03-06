// MEDIUM: Write a function that would allow you to do this:
// var sharePizza = cutPizzaSlices(8);
// console.log(sharePizza(2));  
// prints "Each person gets 4.00 slices of pizza"
// console.log(sharePizza(3)); 
// prints "Each person gets 2.67 slices of pizza"

// function cutPizzaSlices(sharePizza){
//     var guests = parseInt(prompt ('You have 8 slices, but how many people are eating?'))
//     var guests = guests.toFixed(3)
//     return 8 / guests
// };

// console.log(cutPizzaSlices())

//

let cutPizzaSlices = (slices) => {
    return (x) => `Each Person gets ${slices / x} slices of pizza.`
};

var sharePizza = cutPizzaSlices(8);

console.log(sharePizza(2));
console.log(sharePizza(3));
