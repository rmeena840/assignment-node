/* You can write anything in this file
IF you want to execute any code, run `npm start`. Node.js will execute code only in this file..
*/
import asynchronousDelay from "./1-asynchronous-delay"
import transformArgumentsToArray from "./2-wrap-it"
import magicArray from "./3-array-magic"
import waitAMinute from "./4-wait-a-minute"

// This is answer 1

asynchronousDelay(3000, () => {
    console.log("----Answer 1------")
    console.log("This was printed after 3000 ms");
})

// This is answer 2

console.log("----Answer 2------")
function sum( ...args ) {
    return Array.from( args );
}

const newSum = (itemArray) => {
    var sum = 0;
    for( var i = 0; i < itemArray.length; i++ ){
        sum += itemArray[ i ];
    }
    return sum;
}

const convertArgsToArray = (transformArgumentsToArray(sum(1, 2, 3, 4, 5)));
console.log(newSum(convertArgsToArray));

// This is answer 3

console.log("----Answer 3------")
console.log(magicArray([5, 3, 14, 8]));

// This is anwer 4

console.log("------Answer 4-----")
waitAMinute()




// console.log("Hello world")
