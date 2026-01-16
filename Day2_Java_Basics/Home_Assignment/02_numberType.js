// Learn to categorize a number as positive, negative, or zero using conditional statements in JavaScript.

function numbertype(num) {
    if (num > 0) {
        console.log("Positive");
    } else if (num < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }       
}
numbertype(10);
numbertype(-5);
numbertype(0);  