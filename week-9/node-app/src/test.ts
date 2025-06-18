function sum(a: number , b: number) {

return a + b;
}

function mult(sum: number) {
    return sum * sum;
}

console.log(mult(sum(2, 3)))
