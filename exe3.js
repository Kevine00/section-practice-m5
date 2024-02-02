const add = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a + b : NaN;
const sub = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a - b : NaN;
const mult = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a * b : NaN;

console.log(add(12, 10));    
console.log(mult(10, 10.1));