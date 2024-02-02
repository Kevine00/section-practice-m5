function add(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a + b;
    } else {
        return NaN;
    }
}

function sub(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a - b;
    } else {
        return NaN;
    }
}

function mult(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a * b;
    } else {
        return NaN;
    }
}
console.log(add(12, 10)); 
console.log(mult(12, 10.1));