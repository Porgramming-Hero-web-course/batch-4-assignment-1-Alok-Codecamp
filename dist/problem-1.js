"use strict";
//function sumArray
function sumArray(param) {
    const sum = param.reduce((total, currentValue) => total + currentValue);
    return sum;
}
const res = sumArray([2, 2, 6]);
console.log(res);
