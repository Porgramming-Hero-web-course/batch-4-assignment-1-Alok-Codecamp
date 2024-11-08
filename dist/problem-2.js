"use strict";
{
    // function removeDuplicates
    function removeDuplicates(arr) {
        return arr.filter((element, index) => arr.indexOf(element) === index);
    }
    // here created an array for test the function removeDuplicates
    const result1 = removeDuplicates([1, 2, 2, 3, 4, 4, 5, 5, 6, 6]);
    // here printed the result
    console.log(result1);
    //
}
