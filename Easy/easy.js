// EASY: Write a function that would allow you to do this:
// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running"
// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"

function exercise(activity){
    return () => `Today's Exercise: ${activity}`
}

var run = exercise('Running')
var swim = exercise('Swim')

console.log(run())
console.log(swim())