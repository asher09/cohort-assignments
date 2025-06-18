"use strict";
function sum(a, b) {
    return a + b;
}
function mult(sum) {
    return sum * sum;
}
console.log(mult(sum(2, 3)));
